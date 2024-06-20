import React from 'react'
import Layout from '../component/Layout/Layout'

const Contact = () => {
  return (
    <Layout>
     <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto md:grid-cols-2 md:px-12 lg:min-w-full xl:px-32 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  dark:text-gray-800">
	<div className="flex flex-col justify-between ">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight  lg:text-5xl">Let's talk!</h2>
			<div className="dark:text-gray-600">Vivamus in nisl metus? Phasellus.</div>
		</div>
		<img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
	</div>
	<form noValidate="" className="space-y-6">
		<div>
			<label htmlFor="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-100" />
		</div>
		<div>
			<label htmlFor="email" className="text-sm">Email</label>
			<input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-100" />
		</div>
		<div>
			<label htmlFor="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-100"></textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50">Send Message</button>
	</form>
</div>
    </Layout>
  )
}

export default Contact
