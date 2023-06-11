
export default function Login(): JSX.Element {
    return (
      <main className="flex h-screen w-screen flex-col items-center justify-center bg-zinc-900 text-white">
        <h1 className="mb-2 text-4xl sm:mb-8 sm:text-7xl">Harper Media</h1>
        <p className="mb-2 text-xl sm:mb-4 sm:text-2xl">New site coming soon.</p>
      </main>
    );
  }
  

export async function getServerSideProps({ req }) {
  return {
    props: { data: true },
  };
}
