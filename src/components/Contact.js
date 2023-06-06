import React from "react";
function Contact() {
    return (
        <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 pr-8">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-6">
            Have a question or want to learn more about DeepLeaf? Reach out to us using the contact form or the provided contact information below.
          </p>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-bold text-lg">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-bold text-lg">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 font-bold text-lg">Message</label>
              <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <button type="submit" className="px-6 py-2 bg-green-500 text-white font-bold rounded-lg">Submit</button>
          </form>
          <br></br>
        </div>
        <div className="w-full lg:w-1/2">
            <h2>Business Hours</h2>
Mon-Fri 9:00AM – 5:00PM<br></br>
Sat-Sun 10:00AM – 6:00PM
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <ul className="list-disc pl-6">
            <li className="mb-4">
              <h3 className="text-lg font-bold">Email</h3>
              <p>hello@deepleaf.io</p>
            </li>
            <li className="mb-4">
              <h3 className="text-lg font-bold">Phone</h3>
              <p>Contact Info
+212 07 08 76 53 50</p>
            </li>
            <li className="mb-4">
              <h3 className="text-lg font-bold">Address</h3>
              <p>TA110, Technopark Souss Massa,

80000, Agadir, Morocco.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    )
}
export default Contact;