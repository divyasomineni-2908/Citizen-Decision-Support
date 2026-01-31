import React, { useState, useMemo, useEffect, useRef } from 'react';
import { MOCK_APPLICATIONS } from '../constants';
import { Application, Scheme } from '../types';
import { UserIcon, PlusIcon, ArrowUpIcon, ArrowDownIcon, SortIcon, StarIcon } from './Icons';
import { StatusBadge } from './StatusBadge';
import ApplicationDetail from './ApplicationDetail';
import AddApplicationModal from './AddApplicationModal';
import { translateText } from '../services/geminiService';
import { getTranslator } from '../services/translations';

type SortableKeys = 'submissionDate' | 'status';
type SortConfig = {
    key: SortableKeys | null;
    direction: 'ascending' | 'descending';
};

interface ProfileProps {
    schemes: Scheme[];
    onToggleFavorite: (schemeId: string) => void;
    language: string;
}

interface TranslatedContent {
    description: string;
    benefits: string[];
}

const FavoriteSchemeItem: React.FC<{
    scheme: Scheme;
    isExpanded: boolean;
    onToggleExpand: () => void;
    onToggleFavorite: (schemeId: string) => void;
    language: string;
}> = ({ scheme, isExpanded, onToggleExpand, onToggleFavorite, language }) => {
    
    const [translatedContent, setTranslatedContent] = useState<TranslatedContent | null>(null);
    const [isTranslating, setIsTranslating] = useState(false);
    const translationCache = useRef<{ [key: string]: TranslatedContent }>({});
    const t = getTranslator(language);

    useEffect(() => {
        if (isExpanded && language !== 'English') {
            const translate = async () => {
                const cacheKey = `${scheme.id}-${language}`;
                if (translationCache.current[cacheKey]) {
                    setTranslatedContent(translationCache.current[cacheKey]);
                    return;
                }
                setIsTranslating(true);
                try {
                    const [description, benefits] = await Promise.all([
                        translateText(scheme.description, language) as Promise<string>,
                        translateText(scheme.benefits, language) as Promise<string[]>,
                    ]);
                    const content = { description, benefits };
                    translationCache.current[cacheKey] = content;
                    setTranslatedContent(content);
                } catch (e) {
                    console.error("Translation failed for favorite scheme", e);
                } finally {
                    setIsTranslating(false);
                }
            };
            translate();
        }
    }, [isExpanded, language, scheme]);

    const description = (language !== 'English' && translatedContent) ? translatedContent.description : scheme.description;
    const benefits = (language !== 'English' && translatedContent) ? translatedContent.benefits : scheme.benefits;
    const eligibilityCriteria = Object.entries(scheme.eligibility).filter(([_, value]) => value != null);

    return (
        <li className="p-6 transition-colors hover:bg-gray-50">
            <div className="flex items-center justify-between cursor-pointer" onClick={onToggleExpand}>
                <div className="flex-1">
                    <p className="text-lg font-semibold text-dark">{t(scheme.id)}</p>
                    <p className="text-sm text-gray-500">{scheme.department}</p>
                </div>
                <div className="flex items-center gap-4 ml-4">
                    <button
                        className="text-gray-500 hover:text-primary p-1 rounded-full hover:bg-gray-100"
                        aria-expanded={isExpanded}
                        aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
                    >
                        {isExpanded ? <ArrowUpIcon className="w-5 h-5" /> : <ArrowDownIcon className="w-5 h-5" />}
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onToggleFavorite(scheme.id);
                        }}
                        className="text-gray-400 hover:text-accent"
                        aria-label="Remove from favorites"
                    >
                        <StarIcon className="w-6 h-6 text-accent" isFavorite={true} />
                    </button>
                </div>
            </div>
            {isExpanded && (
                <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
                    {isTranslating ? (
                         <div className="space-y-4">
                            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                            <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                         </div>
                    ) : (
                        <>
                            <div>
                                <h4 className="font-semibold text-md text-dark">{t('description')}</h4>
                                <p className="mt-1 text-gray-600 text-sm">{description}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-md text-dark">{t('keyBenefits')}</h4>
                                <ul className="mt-1 space-y-1 list-disc list-inside text-gray-600 text-sm">
                                    {benefits.map((benefit, index) => (
                                        <li key={index}>{benefit}</li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    )}
                    <div>
                        <h4 className="font-semibold text-md text-dark">{t('eligibilityCriteria')}</h4>
                        {eligibilityCriteria.length > 0 ? (
                            <div className="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-gray-600 text-sm">
                                {scheme.eligibility.minAge != null && <p><strong>Min Age:</strong> {scheme.eligibility.minAge}</p>}
                                {scheme.eligibility.maxAge != null && <p><strong>Max Age:</strong> {scheme.eligibility.maxAge}</p>}
                                {scheme.eligibility.maxIncome != null && <p><strong>Max Income:</strong> ₹{scheme.eligibility.maxIncome.toLocaleString()}</p>}
                                {scheme.eligibility.category != null && <p><strong>Category:</strong> {scheme.eligibility.category}</p>}
                                {scheme.eligibility.state != null && <p><strong>State:</strong> {scheme.eligibility.state}</p>}
                            </div>
                        ) : (
                            <p className="mt-1 text-gray-600 text-sm">General eligibility criteria apply.</p>
                        )}
                    </div>
                </div>
            )}
        </li>
    );
};


const Profile: React.FC<ProfileProps> = ({ schemes, onToggleFavorite, language }) => {
    const t = getTranslator(language);
    const [applications, setApplications] = useState<Application[]>(MOCK_APPLICATIONS);
    const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'submissionDate', direction: 'descending' });
    const [expandedSchemeId, setExpandedSchemeId] = useState<string | null>(null);

    const favoriteSchemes = useMemo(() => schemes.filter(s => s.isFavorite), [schemes]);

    const handleToggleExpand = (schemeId: string) => {
        setExpandedSchemeId(prevId => (prevId === schemeId ? null : schemeId));
    };

    const handleAddApplication = (newAppData: Omit<Application, 'id' | 'schemeId'>) => {
        const newApplication: Application = {
            ...newAppData,
            id: `app-${Date.now()}`,
            schemeId: newAppData.schemeTitle.toLowerCase().replace(/\s+/g, '-'), // Note: this is a mock mapping
        };
        setApplications(prev => [newApplication, ...prev]);
        setIsAddModalOpen(false);
    };

    const sortedApplications = useMemo(() => {
        let sortableItems = [...applications];
        if (sortConfig.key !== null) {
            sortableItems.sort((a, b) => {
                if (sortConfig.key === 'submissionDate') {
                    const dateA = new Date(a.submissionDate).getTime();
                    const dateB = new Date(b.submissionDate).getTime();
                    if (dateA < dateB) return sortConfig.direction === 'ascending' ? -1 : 1;
                    if (dateA > dateB) return sortConfig.direction === 'ascending' ? 1 : -1;
                    return 0;
                }
                if (sortConfig.key === 'status') {
                    const statusOrder: Application['status'][] = ['Submitted', 'In Review', 'Approved', 'Rejected'];
                    const orderA = statusOrder.indexOf(a.status);
                    const orderB = statusOrder.indexOf(b.status);
                    if (orderA < orderB) return sortConfig.direction === 'ascending' ? -1 : 1;
                    if (orderA > orderB) return sortConfig.direction === 'ascending' ? 1 : -1;
                    return 0;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [applications, sortConfig]);

    const requestSort = (key: SortableKeys) => {
        let direction: 'ascending' | 'descending' = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const getSortIcon = (key: SortableKeys) => {
        if (sortConfig.key !== key) {
            return <SortIcon className="w-4 h-4 text-gray-400" />;
        }
        if (sortConfig.direction === 'ascending') {
            return <ArrowUpIcon className="w-4 h-4 text-primary" />;
        }
        return <ArrowDownIcon className="w-4 h-4 text-primary" />;
    };

    return (
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-dark tracking-tight">{t('dashboardTitle')}</h1>
                <p className="mt-2 max-w-2xl mx-auto text-lg text-gray-500">
                    {t('dashboardSubtitle')}
                </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 mb-8 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center">
                    <div className="bg-primary/10 p-4 rounded-full mr-6">
                        <UserIcon className="w-10 h-10 text-primary" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-dark">{t('dashboardUserTitle')}</h2>
                        <p className="text-gray-500">citizen.user@email.gov | ID: GOV-12345</p>
                    </div>
                </div>
                <button className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-md hover:bg-gray-300 transition-colors">
                    {t('editProfile')}
                </button>
            </div>

            <div className="mb-12">
                <h2 className="text-3xl font-bold text-dark mb-4">{t('favoriteSchemes')}</h2>
                <div className="bg-white shadow-md rounded-lg">
                    {favoriteSchemes.length > 0 ? (
                        <ul className="divide-y divide-gray-200">
                           {favoriteSchemes.map(scheme => (
                                <FavoriteSchemeItem
                                    key={scheme.id}
                                    scheme={scheme}
                                    isExpanded={expandedSchemeId === scheme.id}
                                    onToggleExpand={() => handleToggleExpand(scheme.id)}
                                    onToggleFavorite={onToggleFavorite}
                                    language={language}
                                />
                           ))}
                        </ul>
                    ) : (
                        <div className="p-6">
                            <p className="text-center text-gray-500">{t('dashboardNoFavorites')}</p>
                        </div>
                    )}
                </div>
            </div>
            
            <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
                <h2 className="text-3xl font-bold text-dark">{t('applicationHistory')}</h2>
                <button 
                    onClick={() => setIsAddModalOpen(true)}
                    className="bg-secondary text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 flex items-center transition-colors"
                    aria-label="Add new application"
                >
                    <PlusIcon className="w-5 h-5 mr-2" />
                    {t('addApplication')}
                </button>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('dashboardTableHeaderScheme')}</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <button onClick={() => requestSort('submissionDate')} className="group inline-flex items-center gap-2">
                                        {t('dashboardTableHeaderDate')}
                                        {getSortIcon('submissionDate')}
                                    </button>
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <button onClick={() => requestSort('status')} className="group inline-flex items-center gap-2">
                                        {t('dashboardTableHeaderStatus')}
                                        {getSortIcon('status')}
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {sortedApplications.map((app) => (
                                <tr 
                                  key={app.id} 
                                  className="hover:bg-gray-50 cursor-pointer"
                                  onClick={() => setSelectedApplication(app)}
                                  tabIndex={0}
                                  onKeyPress={(e) => e.key === 'Enter' && setSelectedApplication(app)}
                                  aria-label={`View details for application ${app.id}`}
                                >
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{t(app.schemeId)}</div>
                                        <div className="text-sm text-gray-500">ID: {app.id}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.submissionDate}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <StatusBadge status={app.status} submissionDate={app.submissionDate} language={language} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {selectedApplication && (
                <ApplicationDetail 
                    application={selectedApplication}
                    onClose={() => setSelectedApplication(null)}
                    language={language}
                />
            )}

            {isAddModalOpen && (
                <AddApplicationModal
                    onClose={() => setIsAddModalOpen(false)}
                    onAddApplication={handleAddApplication}
                    language={language}
                />
            )}
        </div>
    );
};

export default Profile;