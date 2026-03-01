import React from 'react';

interface SearchBarProps {
  value:    string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => (
  <div className="search-wrap">
    <span className="search-icon">🔍</span>
    <input
      className="search-input"
      placeholder="Search by name, benefit, or ingredient…"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);
