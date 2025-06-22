'use client';
import Input from "./components/input/Input";
import styles from "./page.module.css";
import { useState } from 'react';

export default function Home() {
    const [searchTerm, setSearchTerm] = useState<string>('');

   const handleSearchChange = (newValue: string) => {
    setSearchTerm(newValue);
  };
  return (
    <div className={styles.page}>
      <Input
            id="search"
            label="Search Catalogue"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleSearchChange(e.target.value)
            }
            placeholder="Search catalogue..."
            slotProps={{
              htmlInput: {
                'data-testid': 'search-id',
              },
            }}
          />
    </div>
  );
}
