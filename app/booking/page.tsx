import { Suspense } from 'react';
import BookingFormClient from './BookingFormClient';

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading booking form...</div>}>
      <BookingFormClient />
    </Suspense>
  );
}