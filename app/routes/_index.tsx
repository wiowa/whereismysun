import type { MetaFunction } from '@remix-run/cloudflare';
import React from 'react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';

export const meta: MetaFunction = () => {
  return [{ title: '🌻 Where is the sun?' }];
};

export default function Index() {
  const [inputValue, setInputValue] = React.useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='flex flex-col items-center gap-16'>
        <header className='flex flex-col items-center gap-9'>
          <h1 className='leading text-2xl font-bold text-gray-800 dark:text-gray-100'>
            Where is the sun? 🌻
          </h1>
        </header>
        <nav className='flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 p-6 dark:border-gray-700'>
          <Input
            className='w-[30vw]'
            placeholder='where are you?'
            value={inputValue}
            onChange={onChange}
          />
          <Button>Click me</Button>
        </nav>
      </div>
    </div>
  );
}
