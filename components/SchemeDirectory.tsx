import React, { useState, useMemo, useEffect } from 'react';
import { Scheme } from '../types';
import SchemeCard from './SchemeCard';
import SchemeDetail from './SchemeDetail';
import Pagination from './Pagination';
import HowToApplyModal from './HowToApplyModal';
import { SearchIcon, SortIcon, ArrowUpIcon, ArrowDownIcon, FilterIcon } from './Icons';
import { getTranslator } from '../services/translations';

const ITEMS_PER_PAGE = 9;

type SortableSchemeKeys = 'title' | 'category' | 'department';
type SortDirection = 'ascending' | 'descending';

interface SortConfig {
    key: SortableSchemeKeys;
    direction: SortDirection;
}

interface SchemeDirectoryProps {
    schemes: Scheme[];
    onToggleFavorite: (schemeId: string) => void;
    language: string;
}

const SchemeDirectory: React.FC<SchemeDirectoryProps> = ({ schemes, onToggleFavorite, language }) => {
    const t = getTranslator(language);
    const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null);
    const [schemeForHowToApply, setSchemeForHowToApply] = useState<Scheme | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'title', direction: 'ascending' });
    const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = useState(false);
    const [eligibilityFilters, setEligibilityFilters] = useState({
        age: '',
        maxIncome: '',
        gender: '',
        residence: '',
        isStudent: false,
        isPwD: false,
    });

    const categories = useMemo(() => [...new Set(schemes.map(s => s.category))].sort(), [schemes]);
    const departments = useMemo(() => [...new Set(schemes.map(s => s.department))].sort(), [schemes]);

    useEffect(() => {
        setSelectedCategory('');
        setSelectedDepartment('');
        setCurrentPage(1);
    }, [language]);
    
    const handleEligibilityChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const { checked } = e.target as HTMLInputElement;
            setEligibilityFilters(prev => ({ ...prev, [name]: checked }));
        } else {
            setEligibilityFilters(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleResetFilters = () => {
        setSearchQuery('');
        setSelectedCategory('');
        setSelectedDepartment('');
        setEligibilityFilters({
            age: '',
            maxIncome: '',
            gender: '',
            residence: '',
            isStudent: false,
            isPwD: false,
        });
        setSortConfig({ key: 'title', direction: 'ascending' });
        setCurrentPage(1);
    };

    const processedSchemes = useMemo(() => {
        const { age, maxIncome, gender, residence, isStudent, isPwD } = eligibilityFilters;
        const numAge = age ? parseInt(age, 10) : null;
        const numMaxIncome = maxIncome ? parseInt(maxIncome, 10) : null;

        let items = schemes.filter(scheme => {
            // Basic filters
            const searchMatch = (
                scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                scheme.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                scheme.department.toLowerCase().includes(searchQuery.toLowerCase())
            );
            const categoryMatch = selectedCategory === '' || scheme.category === selectedCategory;
            const departmentMatch = selectedDepartment === '' || scheme.department === selectedDepartment;
            if (!searchMatch || !categoryMatch || !departmentMatch) return false;

            // Advanced eligibility filters
            const el = scheme.eligibility;
            if (numAge !== null && !isNaN(numAge)) {
                if (el.minAge && numAge < el.minAge) return false;
                if (el.maxAge && numAge > el.maxAge) return false;
            }
            if (numMaxIncome !== null && !isNaN(numMaxIncome)) {
                if (el.maxIncome && numMaxIncome > el.maxIncome) return false;
            }
            if (gender && el.gender && el.gender !== 'Any' && el.gender !== gender) return false;
            if (residence && el.residence && el.residence !== 'Any' && el.residence !== residence) return false;
            if (isStudent && !el.isForStudents) return false;
            if (isPwD && !el.isForPwD) return false;

            return true;
        });

        if (sortConfig.key) {
            items.sort((a, b) => {
                const aValue = a[sortConfig.key];
                const bValue = b[sortConfig.key];
                if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1;
                if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1;
                return 0;
            });
        }
        
        return items;
    }, [schemes, searchQuery, selectedCategory, selectedDepartment, sortConfig, eligibilityFilters]);
    
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, selectedCategory, selectedDepartment, sortConfig, eligibilityFilters]);
    
    const paginatedSchemes = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return processedSchemes.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [processedSchemes, currentPage]);

    const totalPages = Math.ceil(processedSchemes.length / ITEMS_PER_PAGE);

    const requestSort = (key: SortableSchemeKeys) => {
        let direction: SortDirection = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const getSortIndicator = (key: SortableSchemeKeys) => {
        if (sortConfig.key !== key) return <SortIcon className="w-4 h-4 text-gray-400" />;
        return sortConfig.direction === 'ascending' ? (
            <ArrowUpIcon className="w-4 h-4 text-primary" />
        ) : (
            <ArrowDownIcon className="w-4 h-4 text-primary" />
        );
    };

    return (
        <div>
            <div className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-dark tracking-tight">{t('directoryTitle')}</h1>
                <p className="mt-2 max-w-2xl mx-auto text-lg text-gray-500">
                    {t('directorySubtitle')}
                </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder={t('searchPlaceholder')}
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary pl-10"
                            aria-label="Search schemes"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-400" />
                        </div>
                    </div>
                    <select 
                        value={selectedCategory}
                        onChange={e => setSelectedCategory(e.target.value)}
                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                        aria-label="Filter by category"
                    >
                        <option value="">{t('allCategories')}</option>
                        {categories.map(c => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>
                    <select 
                        value={selectedDepartment}
                        onChange={e => setSelectedDepartment(e.target.value)}
                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                        aria-label="Filter by department"
                    >
                        <option value="">{t('allDepartments')}</option>
                        {departments.map(d => (
                            <option key={d} value={d}>{d}</option>
                        ))}
                    </select>
                </div>

                <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                        <button 
                            onClick={() => setIsAdvancedSearchOpen(!isAdvancedSearchOpen)}
                            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-blue-700"
                            aria-expanded={isAdvancedSearchOpen}
                        >
                            <FilterIcon className="w-4 h-4" />
                            {isAdvancedSearchOpen ? t('hideAdvancedFilters') : t('showAdvancedFilters')}
                        </button>
                        <button onClick={handleResetFilters} className="text-sm font-medium text-gray-600 hover:text-dark">{t('resetFilters')}</button>
                    </div>

                    {isAdvancedSearchOpen && (
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 animate-fade-in-up">
                            <div>
                                <label htmlFor="age" className="block text-sm font-medium text-gray-700">{t('yourAge')}</label>
                                <input type="number" name="age" id="age" value={eligibilityFilters.age} onChange={handleEligibilityChange} className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="e.g., 35" />
                            </div>
                            <div>
                                <label htmlFor="maxIncome" className="block text-sm font-medium text-gray-700">{t('maxAnnualIncome')}</label>
                                <input type="number" name="maxIncome" id="maxIncome" value={eligibilityFilters.maxIncome} onChange={handleEligibilityChange} className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="e.g., 250000" />
                            </div>
                            <div>
                                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">{t('gender')}</label>
                                <select id="gender" name="gender" value={eligibilityFilters.gender} onChange={handleEligibilityChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm">
                                    <option value="">{t('any')}</option>
                                    <option value="Male">{t('male')}</option>
                                    <option value="Female">{t('female')}</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="residence" className="block text-sm font-medium text-gray-700">{t('residence')}</label>
                                <select id="residence" name="residence" value={eligibilityFilters.residence} onChange={handleEligibilityChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm">
                                    <option value="">{t('any')}</option>
                                    <option value="Rural">{t('rural')}</option>
                                    <option value="Urban">{t('urban')}</option>
                                </select>
                            </div>
                            <div className="lg:col-span-2 flex items-end gap-6">
                                <label className="flex items-center">
                                    <input type="checkbox" name="isStudent" checked={eligibilityFilters.isStudent} onChange={handleEligibilityChange} className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                                    <span className="ml-2 text-gray-700 text-sm font-medium">{t('areYouStudent')}</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" name="isPwD" checked={eligibilityFilters.isPwD} onChange={handleEligibilityChange} className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                                    <span className="ml-2 text-gray-700 text-sm font-medium">{t('personWithDisability')}</span>
                                </label>
                            </div>
                        </div>
                    )}
                </div>

                 <div className="flex items-center gap-2 flex-wrap pt-4 border-t border-gray-200">
                    <span className="text-sm font-medium text-gray-600">{t('sortBy')}</span>
                    {(['title', 'category', 'department'] as SortableSchemeKeys[]).map((key) => (
                        <button 
                            key={key}
                            onClick={() => requestSort(key)}
                            className={`flex items-center gap-1 text-sm font-medium px-3 py-1 rounded-full transition-colors ${sortConfig.key === key ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-100'}`}
                        >
                            <span className="capitalize">{t(key as 'title' | 'category' | 'department')}</span>
                            {getSortIndicator(key)}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedSchemes.length > 0 ? (
                    paginatedSchemes.map(scheme => (
                        <SchemeCard 
                            key={scheme.id} 
                            scheme={scheme} 
                            onViewDetails={setSelectedScheme} 
                            onHowToApply={setSchemeForHowToApply}
                            onToggleFavorite={onToggleFavorite}
                            language={language}
                        />
                    ))
                ) : (
                    <div className="col-span-full text-center py-12">
                        <p className="text-lg text-gray-500">{t('noSchemesFound')}</p>
                    </div>
                )}
            </div>
            
            {totalPages > 1 && (
                <div className="mt-12">
                    <Pagination 
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            )}

            {selectedScheme && <SchemeDetail scheme={selectedScheme} onClose={() => setSelectedScheme(null)} language={language} />}
            {schemeForHowToApply && <HowToApplyModal scheme={schemeForHowToApply} onClose={() => setSchemeForHowToApply(null)} language={language} />}
        </div>
    );
};

export default SchemeDirectory;