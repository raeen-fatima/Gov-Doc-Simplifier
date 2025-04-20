const { simplifyText } = require('./simplifyText');

(async () => {
  const text = `Digital India is a flagship initiative launched by the Government of India in July 2015 with the 
primary objective of transforming the country into a digitally empowered society and 
knowledge economy. The vision of this policy revolves around three key areas: providing digital 
infrastructure as a utility to every citizen, delivering government services on demand, and 
empowering citizens digitally. Under this mission, the government has expanded digital services 
to rural and remote areas through Common Service Centers (CSCs), mobile applications, and 
online portals. The initiative promotes paperless and faceless governance through tools such as 
Aadhaar, DigiLocker, and e-Sign, making document sharing more secure and accessible while 
also reducing corruption and enhancing transparency. The introduction of Unified Payments 
Interface (UPI) has revolutionized digital payments, enabling cashless transactions even in small 
towns and villages, and boosting the digital economy. The Pradhan Mantri Gramin Digital 
Saksharta Abhiyan (PMGDISHA) has imparted digital literacy to millions of rural citizens, 
allowing them to confidently use smartphones and the internet for daily needs. The policy has 
brought a digital transformation in sectors like education and healthcare, where online learning 
platforms, telemedicine, and e-hospitals have made access to services more efficient and 
inclusive. In agriculture, farmers receive timely updates on weather conditions, crop pricing, and 
modern farming techniques through various mobile applications. Government schemes such as 
PM-Kisan, Jan Dhan Yojana, and Public Distribution Systems are now integrated with digital 
platforms, ensuring benefits reach citizens directly without middlemen. Digital India also 
emphasizes the adoption of emerging technologies like Artificial Intelligence, Machine Learning, 
and Cloud Computing to strengthen governance and citizen services. Projects like BharatNet aim 
to connect all gram panchayats with high-speed internet through optical fiber, building a robust 
digital backbone for the country. Cybersecurity is also a major focus of this policy, with 
initiatives such as the National Cyber Security Policy, Personal Data Protection Bill, and the role 
of CERT-In ensuring that digital infrastructure and user data are safeguarded. Additionally, 
Digital India has opened up immense employment opportunities and created a thriving 
ecosystem for startups and entrepreneurs. India is now one of the fastest-growing digital 
markets in the world, and much of this progress can be attributed to the strong vision and 
execution of the Digital India policy. It has not only modernized government-citizen interaction 
but has also inspired digital inclusiveness, innovation, and self-reliance among millions of 
Indians. Overall, Digital India is leading the nation into a new digital era where access to 
technology is a right, not a privilege, and where the power of the internet is harnessed for 
inclusive development and economic growth.`;
  const simplified = await simplifyText(text, 'hi'); // 'hi' for Hindi
  console.log('Simplified Output:\n', simplified);
})();
