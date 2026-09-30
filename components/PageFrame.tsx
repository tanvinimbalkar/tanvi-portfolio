import SiteHeader from '@/components/SiteHeader';

export default function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SiteHeader />
      </div>
      <main className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
