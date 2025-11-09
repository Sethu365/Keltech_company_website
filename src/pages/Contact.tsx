import React, { useState } from 'react';

// --- Icon Components ---

const iconProps = {
  className: "w-5 h-5",
  strokeWidth: 1.5,
};

const UserIcon: React.FC = () => (
  <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
  </svg>
);

const EmailIcon: React.FC = () => (
  <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
  </svg>
);

const PhoneIcon: React.FC = () => (
  <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>
  </svg>
);

const PencilIcon: React.FC = () => (
  <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
  </svg>
);


// --- FormField Component ---

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({ id, label, icon, ...props }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
          {icon}
        </span>
        <input
          id={id}
          className="w-full bg-gray-50 p-3 pl-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
          {...props}
        />
      </div>
    </div>
  );
};


// --- Main Page Component ---

const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [question, setQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      fullName,
      email,
      phone,
      question,
    });
    setSubmitted(true);
    // Reset form after a delay
    setTimeout(() => {
        setFullName('');
        setEmail('');
        setPhone('');
        setQuestion('');
        setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <main className="max-w-6xl w-full bg-white rounded-2xl shadow-lg grid md:grid-cols-2 overflow-hidden">
        {/* Left Section (Information) */}
        <div className="p-8 sm:p-12 text-center md:text-left flex flex-col justify-center bg-purple-700 text-white">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              For Any Inquiries
            </h1>
            <p className="mt-6 text-lg text-purple-200 leading-relaxed">
              You can contact us anytime for our professional support or any questions. Feel free to leave your comments and feedback.
            </p>
            <p className="mt-12 text-xl font-medium text-purple-300">
              Thank you, Visit again.
            </p>
          </div>
        </div>

        {/* Right Section (Contact Form) */}
        <div className="p-8 sm:p-12 bg-white">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ask Question</h2>
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
                 <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 className="text-2xl font-bold text-gray-800">Thank You!</h3>
                <p className="text-gray-600 mt-2">Your inquiry has been submitted successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <FormField
                id="fullName"
                label="Full Name"
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                icon={<UserIcon />}
                required
              />
              <FormField
                id="email"
                label="Email Address"
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                icon={<EmailIcon />}
                required
              />
              <FormField
                id="phone"
                label="Phone Number"
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                icon={<PhoneIcon />}
              />

              <div>
                <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">Question</label>
                <div className="relative">
                  <span className="absolute top-3.5 left-3 text-gray-400">
                    <PencilIcon />
                  </span>
                  <textarea
                    id="question"
                    placeholder="Type your question here..."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    rows={5}
                    className="w-full p-3 pl-10 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105 duration-300 ease-in-out flex items-center justify-center text-lg"
              >
                Submit
                <span className="ml-2 font-sans">→</span>
              </button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
