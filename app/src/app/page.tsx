import Link from 'next/link';

export default function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      <div className="max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl text-black font-bold mb-4">Website Under Construction</h1>
        
        <div className="my-6">
          <svg className="mx-auto w-24 h-24 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        
        <p className="text-gray-700 mb-6">
          I&apos;m currently building something amazing. In the meantime, you can connect with me on LinkedIn:
        </p>
        
        <Link 
          href="https://www.linkedin.com/in/starwwong/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
        >
          Visit My LinkedIn
        </Link>
        
        <p className="mt-8 text-sm text-gray-500">
          Check back soon for updates! <br></br>
          (Last updated: 3/12/2025)
        </p>
      </div>
    </div>
  );
}