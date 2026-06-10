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
  
  if (lowerMessage.includes('treatment') || lowerMessage.includes('service')) {
    return 'We offer various treatments including Laser Treatment, Hair Transplant, Botox and Fillers, Chemical Peeling, PRP Therapy, and more. Would you like details about any specific treatment?';
  }
  
  if (lowerMessage.includes('appointment') || lowerMessage.includes('book') || lowerMessage.includes('consultation')) {
    return 'You can book an appointment through our website\'s appointment section or contact us directly. We also offer teledermatology consultations for remote patients.';
  }
  
  if (lowerMessage.includes('doctor') || lowerMessage.includes('dr.') || lowerMessage.includes('prabin')) {
    return 'Dr. Prabin Dhakal is our HOD of Dermatology with MBBS from KU and MD Dermatovenereology from IOM, TUTH. He has a fellowship in Laser & Aesthetic Surgery from Delhi (2020) and 6+ years of clinical experience.';
  }
  
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('fee')) {
    return 'Treatment prices vary depending on the procedure and individual needs. Please book a consultation for accurate pricing information.';
  }
  
  if (lowerMessage.includes('location') || lowerMessage.includes('address') || lowerMessage.includes('where')) {
    return 'Sahara Skin Clinic is located in Kalanki, Kathmandu, Nepal.';
  }
  
  if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
    return 'You can contact us through our website or visit our clinic in Kalanki, Kathmandu. Our contact details are available on the website.';
  }
  
  return 'I apologize, but I\'m having trouble connecting to our AI service right now. For detailed information about our treatments and services, please book a consultation with Dr. Prabin Dhakal or contact us directly. You can also explore our treatment options on the website.';
}
