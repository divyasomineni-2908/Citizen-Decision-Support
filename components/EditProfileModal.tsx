import React, { useState } from 'react';
import { UserProfile } from '../types';
import { CloseIcon } from './Icons';
import { getTranslator } from '../services/translations';

interface EditProfileModalProps {
  userProfile: UserProfile;
  onSave: (updatedProfile: UserProfile) => void;
  onClose: () => void;
  language: string;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ userProfile, onSave, onClose, language }) => {
  const t = getTranslator(language);
  const [formData, setFormData] = useState<UserProfile>(userProfile);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (name === 'age' || name === 'annualIncome') {
      setFormData(prev => ({ ...prev, [name]: parseInt(value, 10) || 0 }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-primary">{t('editProfile')}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                {t('yourAge')}
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                min="0"
                max="120"
                required
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                {t('gender')}
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              >
                <option value="Male">{t('male')}</option>
                <option value="Female">{t('female')}</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="annualIncome" className="block text-sm font-medium text-gray-700 mb-1">
                Annual Income (₹)
              </label>
              <input
                type="number"
                id="annualIncome"
                name="annualIncome"
                value={formData.annualIncome}
                onChange={handleChange}
                min="0"
                required
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="residence" className="block text-sm font-medium text-gray-700 mb-1">
                {t('residence')}
              </label>
              <select
                id="residence"
                name="residence"
                value={formData.residence}
                onChange={handleChange}
                required
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              >
                <option value="Rural">{t('rural')}</option>
                <option value="Urban">{t('urban')}</option>
              </select>
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              >
                <option value="General">General</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
                <option value="OBC">OBC</option>
                <option value="EWS">EWS</option>
              </select>
            </div>
          </div>

          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="isStudent"
                checked={formData.isStudent}
                onChange={handleChange}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-700 text-sm font-medium">{t('areYouStudent')}</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                name="isPwD"
                checked={formData.isPwD}
                onChange={handleChange}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-700 text-sm font-medium">{t('personWithDisability')}</span>
            </label>
          </div>

          <div className="sticky bottom-0 bg-white pt-4 border-t border-gray-200 flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-md hover:bg-gray-300 transition-colors"
            >
              {t('addAppCancelBtn')}
            </button>
            <button
              type="submit"
              className="bg-primary text-white font-bold py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
            >
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
