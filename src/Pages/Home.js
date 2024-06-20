import React from 'react'
import Layout from '../component/Layout/Layout'

const Home = () => {
  return (
    <Layout>
    <section className="dark: bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 to-blue-500 dark:text-gray-800">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl ">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl">
			<span className="dark:text-violet-600"></span>React Dom Poject
		</h1>
		<p className="px-8 mt-8 mb-12 text-lg font-semibold">A JavaScript library for building user interfaaces</p>
		<div className="flex flex-wrap justify-center">
			<button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-600 bg-blue-400 dark:text-gray-50">Get started</button>
			<button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-900 bg-gray-400 dark:border-gray-300">Learn more</button>
		</div>
	</div>
</section>
    </Layout>
  )
}

export default Home
