import React from 'react'

const Patner = () => {
  return (
    <div>
      <main className="container mx-auto py-12 px-4">
  <h1 className="text-3xl font-bold mb-6 text-center">Our Valued Partners</h1>
  <p className="text-gray-700 mb-8 text-center">We are grateful for the collaboration of our partners who help us achieve...</p>
  <section className="partners">
    <h2 className="text-2xl font-bold mb-4 text-center">Our Partners</h2>
    <div className="partner-list grid grid-cols-1 md:grid-cols-3 gap-4">
      <article className="partner bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg">
        <a href="partner-website.com">
          <img src="C:\Users\RIYA\OneDrive\Pictures\deltic logo.jpeg" alt="Partner Logo" className="w-200 h-200 mb-2 hover:opacity-75" />
        </a>
        <p className="text-gray-700 font-bold mb-1">Partner Name</p>
        <p className="text-gray-600 text-sm">A brief description of the partner and the nature of the collaboration.</p>
      </article>
      <article className="partner bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg">
        <a href="partner-website.com">
          <img src="C:\Users\RIYA\OneDrive\Pictures\HeroLectro logo.jpg" alt="Partner Logo" className="w-200 h-200 mb-2 hover:opacity-75" />
        </a>
        <p className="text-gray-700 font-bold mb-1">Partner Name</p>
        <p className="text-gray-600 text-sm">A brief description of the partner and the nature of the collaboration.</p>
      </article>
      <article className="partner bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg">
        <a href="partner-website.com">
          <img src="C:\Users\RIYA\OneDrive\Pictures\sunmobility logo.jpeg" alt="Partner Logo" className="w-200 h-200 mb-2 hover:opacity-75" />
        </a>
        <p className="text-gray-700 font-bold mb-1">Partner Name</p>
        <p className="text-gray-600 text-sm">A brief description of the partner and the nature of the collaboration.</p>
      </article>
    </div>
  </section>
  <section className="cta mt-12 text-center w-1/4 mx-auto bg-white rounded-lg shadow-md p-9">  <h2 className="text-2xl font-bold mb-4">Interested in Partnering?</h2>
    <p className="text-gray-700 mb-4">Learn more about our partnership opportunities.</p>
    <a href="partnership-page.html" className="group hover:bg-yellow-700 bg-blue-900 text-white px-8 py-3 rounded-md">
      Join as a Partner
    </a>
  </section>
</main>

    </div>
  )
}

export default Patner