'use client';
import Autocomplete from './components/Autocomplete';

export default function Home() {
  const cityNames = [
    'Amsterdam',
    'Berlin',
    'London',
    'New York',
    'Paris',
    'Rome',
    'San Francisco',
    'Tokyo',
    'Washington DC',
    'Zurich',
    'Copenhagen',
    'Helsinki',
    'Madrid',
    'Reykjavik',
    'Stockholm',
    'Vancouver',
    'Vienna',
    'Zagreb',
    'Budapest',
    'Dublin',
    'Hamburg',
    'Krakow',
    'Lisbon',
    'Ljubljana',
  ];

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        <Autocomplete options={cityNames} />
      </div>
    </main>
  );
}
