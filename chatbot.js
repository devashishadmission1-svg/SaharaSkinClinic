// Chatbot with Gemini API Integration
const GEMINI_API_KEY = 'AIzaSyBob9KA4iPBd5o9y0bLkmCC1eF3A-n6ePU';

// Clinic context for the chatbot
const CLINIC_CONTEXT = `
You are a helpful assistant for Sahara Skin Clinic, a dermatology clinic in Kathmandu, Nepal. Here is comprehensive information about the clinic:

CLINIC INFORMATION:
- Name: Sahara Skin Clinic
- Location: Kalanki, Kathmandu, Nepal
- Head of Department: Dr. Prabin Dhakal
- Specialization: Dermatovenereology and Aesthetics
- Experience: 6+ years clinical experience

DOCTOR INFORMATION:
- Name: Dr. Prabin Dhakal
- Qualifications: MBBS (KU), MD Dermatovenereology (IOM, TUTH)
- Fellowship: Fellowship in Laser & Aesthetic Surgery, Delhi (2020)
- Expertise: Skin, nail, and hair disorders including acne, eczema, psoriasis, vitiligo, fungal infections, hair loss
- Special Interest: STDs (syphilis, gonorrhea, herpes, HPV), laser and cosmetic surgery

TREATMENTS OFFERED:
1. Laser Treatment - Uses triple-wavelength laser for pigmentation, scars, hair removal, skin resurfacing. Duration: 30-60 mins, Downtime: 1-3 days
2. Hair Transplant - FUE and DHI methods for hair restoration. Duration: 4-8 hours, Downtime: 7-10 days
3. Allergy Test - Patch and prick tests to identify skin allergies. Duration: 30 mins, Downtime: None
4. Botox and Fillers - Cosmetic injections for wrinkles and facial volume. Duration: 15-30 mins, Downtime: None
5. Cryotherapy - Liquid nitrogen treatment for warts, skin tags, lesions. Duration: 10-15 mins, Downtime: 3-5 days
6. Chemical Peeling - Glycolic, Salicylic, Lactic, Jessner's solutions for skin texture. Duration: 20-30 mins, Downtime: 2-5 days
7. Mole Removal - RF cautery or surgical excision for moles and growths. Duration: 15-30 mins, Downtime: 5-7 days
8. Teledermatology - Remote video/photo consultations. Duration: 15 mins, Downtime: None
9. PRP Therapy - Platelet-Rich Plasma for hair growth and skin repair. Duration: 45-60 mins, Downtime: None
10. Cosmetic Surgery - Minor outpatient procedures (earlobe repair, scar revision, cyst excision). Duration: 30-90 mins, Downtime: 5-10 days
11. Skin Analyzer - Multi-spectral diagnostic technology. Duration: 15 mins, Downtime: None
12. ZSR Circumcision - Modern stapler circumcision. Duration: 15-20 mins, Downtime: 3-5 days
13. Photo Therapy - Narrowband UVB for psoriasis, eczema, vitiligo. Duration: 5-15 mins, Downtime: None
14. Vitiligo Surgery - Melanocyte transplant for stable vitiligo. Duration: 1-3 hours, Downtime: 7-14 days

BOOKING INFORMATION:
- Patients can book consultations through the website's appointment section
- Contact information available on the website
- Teledermatology available for remote consultations

IMPORTANT GUIDELINES:
- Only answer questions related to the clinic, treatments, doctor, or general dermatology
- Be helpful, professional, and friendly
- If asked about medical advice, always recommend consulting Dr. Prabin Dhakal for proper diagnosis
- Provide accurate information based on the clinic's services
- If unsure about something, suggest booking a consultation
- Keep responses concise but informative
`;

// Chatbot state
let conversationHistory = [
  {
    role: 'user',
    parts: [{ text: 'Hello! Please introduce yourself as the Sahara Skin Clinic assistant.' }]
  },
  {
    role: 'model',
    parts: [{ text: 'Hello! I\'m your Sahara Skin Clinic assistant. I\'m here to help you with information about our treatments, services, and answer any questions you may have about skin care. How can I assist you today?' }]
  }
];

// DOM elements
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');
const suggestionBtns = document.querySelectorAll('.suggestion-btn');

// Toggle chatbot window
chatbotToggle.addEventListener('click', () => {
  chatbotWindow.classList.toggle('open');
});

chatbotClose.addEventListener('click', () => {
  chatbotWindow.classList.remove('open');
});

// Handle suggestion buttons
suggestionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const question = btn.textContent;
    chatbotInput.value = question;
    sendMessage();
  });
});

// Send message on Enter key
chatbotInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// Send message on button click
chatbotSend.addEventListener('click', sendMessage);

// Send message function
async function sendMessage() {
  const message = chatbotInput.value.trim();
  if (!message) return;

  // Add user message to chat
  addMessage(message, 'user');
  chatbotInput.value = '';
  chatbotSend.disabled = true;

  // Show typing indicator
  showTypingIndicator();

  try {
    const response = await getGeminiResponse(message);
    removeTypingIndicator();
    addMessage(response, 'bot');
  } catch (error) {
    removeTypingIndicator();
    console.error('Chatbot error details:', error);
    addMessage('I apologize, but I\'m having trouble connecting right now. Please try again later or contact us directly for assistance.', 'bot');
  }

  chatbotSend.disabled = false;
}

// Add message to chat
function addMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `chatbot-message ${sender}-message`;
  
  const contentDiv = document.createElement('div');
  contentDiv.className = 'message-content';
  contentDiv.innerHTML = `<p>${text}</p>`;
  
  messageDiv.appendChild(contentDiv);
  chatbotMessages.appendChild(messageDiv);
  
  // Scroll to bottom
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Show typing indicator
function showTypingIndicator() {
  const typingDiv = document.createElement('div');
  typingDiv.className = 'chatbot-message bot-message typing-indicator-message';
  typingDiv.id = 'typing-indicator';
  
  const contentDiv = document.createElement('div');
  contentDiv.className = 'message-content';
  
  const indicatorDiv = document.createElement('div');
  indicatorDiv.className = 'typing-indicator';
  indicatorDiv.innerHTML = '<span></span><span></span><span></span>';
  
  contentDiv.appendChild(indicatorDiv);
  typingDiv.appendChild(contentDiv);
  chatbotMessages.appendChild(typingDiv);
  
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Remove typing indicator
function removeTypingIndicator() {
  const typingIndicator = document.getElementById('typing-indicator');
  if (typingIndicator) {
    typingIndicator.remove();
  }
}

// Get response from Gemini API
async function getGeminiResponse(userMessage) {
  // Add user message to conversation history
  conversationHistory.push({
    role: 'user',
    parts: [{ text: userMessage }]
  });

  // Keep conversation history manageable (last 10 messages)
  if (conversationHistory.length > 10) {
    conversationHistory = conversationHistory.slice(-10);
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: conversationHistory,
          systemInstruction: {
            parts: [{ text: CLINIC_CONTEXT }]
          },
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 500,
          }
        })
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error('API Error Response:', errorData);
      console.error('API Status:', response.status);
      throw new Error(`API Error: ${response.status} - ${errorData}`);
    }

    const data = await response.json();
    const botResponse = data.candidates[0].content.parts[0].text;

    // Add bot response to conversation history
    conversationHistory.push({
      role: 'model',
      parts: [{ text: botResponse }]
    });

    return botResponse;
  } catch (error) {
    console.error('Detailed error:', error);
    // Fallback to simple responses based on keywords if API fails
    return getFallbackResponse(userMessage);
  }
}

// Fallback responses when API is unavailable
function getFallbackResponse(message) {
  const lowerMessage = message.toLowerCase();
  
  // Check for treatment-related keywords with common misspellings
  const treatmentKeywords = ['treatment', 'service', 'therapy', 'procedure', 'laser', 'hair', 'transplant', 'botox', 'filler', 'chemical', 'peel', 'prp', 'cryotherapy', 'cryo', 'cyrotherapy', 'mole', 'allergy', 'skin', 'acne', 'eczema', 'psoriasis', 'vitiligo', 'wrinkle', 'scar', 'pigment'];
  if (treatmentKeywords.some(keyword => lowerMessage.includes(keyword) || isSimilar(lowerMessage, keyword))) {
    return 'We offer various treatments including Laser Treatment, Hair Transplant, Botox and Fillers, Chemical Peeling, PRP Therapy, Cryotherapy, and more. Would you like details about any specific treatment?';
  }
  
  // Check for appointment/booking keywords with common misspellings
  const appointmentKeywords = ['appointment', 'book', 'consultation', 'schedule', 'reserve', 'booking', 'apointment', 'consult'];
  if (appointmentKeywords.some(keyword => lowerMessage.includes(keyword) || isSimilar(lowerMessage, keyword))) {
    return 'You can book an appointment through our website\'s appointment section or contact us directly. We also offer teledermatology consultations for remote patients.';
  }
  
  // Check for doctor-related keywords with common misspellings
  const doctorKeywords = ['doctor', 'dr.', 'dr', 'prabin', 'dhakal', 'physician', 'specialist', 'dermatologist'];
  if (doctorKeywords.some(keyword => lowerMessage.includes(keyword) || isSimilar(lowerMessage, keyword))) {
    return 'Dr. Prabin Dhakal is our HOD of Dermatology with MBBS from KU and MD Dermatovenereology from IOM, TUTH. He has a fellowship in Laser & Aesthetic Surgery from Delhi (2020) and 6+ years of clinical experience.';
  }
  
  // Check for pricing keywords with common misspellings
  const priceKeywords = ['price', 'cost', 'fee', 'charge', 'rate', 'pricing', 'expensive', 'cheap', 'affordable'];
  if (priceKeywords.some(keyword => lowerMessage.includes(keyword) || isSimilar(lowerMessage, keyword))) {
    return 'Treatment prices vary depending on the procedure and individual needs. Please book a consultation for accurate pricing information.';
  }
  
  // Check for location keywords with common misspellings
  const locationKeywords = ['location', 'address', 'where', 'located', 'place', 'area', 'kalanki', 'kathmandu', 'nepal'];
  if (locationKeywords.some(keyword => lowerMessage.includes(keyword) || isSimilar(lowerMessage, keyword))) {
    return 'Sahara Skin Clinic is located in Kalanki, Kathmandu, Nepal.';
  }
  
  // Check for contact keywords with common misspellings
  const contactKeywords = ['contact', 'phone', 'email', 'call', 'number', 'reach', 'communicate', 'message'];
  if (contactKeywords.some(keyword => lowerMessage.includes(keyword) || isSimilar(lowerMessage, keyword))) {
    return 'You can contact us through our website or visit our clinic in Kalanki, Kathmandu. Our contact details are available on the website.';
  }
  
  // Check for timing/hours keywords
  const timingKeywords = ['time', 'hour', 'open', 'close', 'timing', 'schedule', 'when', 'available'];
  if (timingKeywords.some(keyword => lowerMessage.includes(keyword) || isSimilar(lowerMessage, keyword))) {
    return 'Please contact us directly for our clinic hours and availability. We recommend booking an appointment for the best experience.';
  }
  
  return 'I apologize, but I\'m having trouble connecting to our AI service right now. For detailed information about our treatments and services, please book a consultation with Dr. Prabin Dhakal or contact us directly. You can also explore our treatment options on the website.';
}

// Simple similarity check for handling typos
function isSimilar(text, keyword) {
  // Check if the keyword is a substring of the text
  if (text.includes(keyword)) return true;
  
  // Check for common typos by removing vowels and comparing
  const textNoVowels = text.replace(/[aeiou]/g, '');
  const keywordNoVowels = keyword.replace(/[aeiou]/g, '');
  
  if (textNoVowels.includes(keywordNoVowels) && keyword.length > 3) return true;
  
  // Check for partial matches (at least 60% of characters match)
  const textWords = text.split(/\s+/);
  for (const word of textWords) {
    if (word.length >= 4) {
      const similarity = calculateSimilarity(word, keyword);
      if (similarity > 0.6) return true;
    }
  }
  
  return false;
}

// Calculate similarity between two strings (Levenshtein distance-based)
function calculateSimilarity(str1, str2) {
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;
  
  if (longer.length === 0) return 1.0;
  
  const costs = [];
  for (let i = 0; i <= longer.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= shorter.length; j++) {
      if (i === 0) {
        costs[j] = j;
      } else if (j > 0) {
        let newValue = costs[j - 1];
        if (longer.charAt(i - 1) !== shorter.charAt(j - 1)) {
          newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
        }
        costs[j - 1] = lastValue;
        lastValue = newValue;
      }
    }
    if (i > 0) costs[shorter.length] = lastValue;
  }
  
  return 1 - (costs[shorter.length] / longer.length);
}
