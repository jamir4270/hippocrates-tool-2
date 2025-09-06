# Hippocrates' Tool: A Rule-Based Expert System

## Project Description
**Hippocrates' Tool** is a single-page web application built with **React** and **Vite**.  
It functions as a simple **rule-based expert system** designed to provide a basic diagnosis and treatment recommendation based on user-inputted symptoms.

The system processes information about a user's **temperature** and other **symptoms** to determine if they have a fever, a cold, or another ailment, and then suggests an appropriate course of action:  
- **No medication**  
- **Tylenol**  
- **Antibiotics**

---

## Rule-Based System
The core of this application is a set of **production rules** that mimic human reasoning in a simplified diagnostic scenario.  
The system uses a **forward-chaining inference engine** to move from the initial user inputs (facts) to a final conclusion (treatment).

### Rules
1. **IF** temperature < 37 **THEN** no fever  
2. **IF** temperature >= 37 **AND** temperature < 38 **THEN** low fever  
3. **IF** temperature >= 38 **THEN** high fever  
4. **IF** light nasal breathing **THEN** nasal discharge  
5. **IF** heavy nasal breathing **THEN** sinus membranes swelling  
6. **IF** low fever **AND** headache **AND** nasal discharge **AND** cough **THEN** cold  
7. **IF** cold **AND NOT** sore throat **THEN** don't treat  
8. **IF** cold **AND** sore throat **THEN** treat  
9. **IF** don't treat **THEN** don't give medication  
10. **IF** treat **THEN** give medication  
11. **IF** give medication **AND** antibiotics allergy **THEN** give Tylenol  
12. **IF** give medication **AND NOT** antibiotics allergy **THEN** give antibiotics  

---

## Features
- 📝 **Interactive Symptom Input**: Users can input their temperature and select from a list of common symptoms.  
- ⚡ **Dynamic Diagnosis**: Provides a real-time diagnosis based on selected symptoms and predefined rules.  
- 💊 **Treatment Recommendations**: Suggests an appropriate plan (no medication, Tylenol, or antibiotics).  
- 🎨 **Clear UI**: A clean and easy-to-use interface ensures a smooth user experience.  

---

## Technologies
- **Frontend**: React with Vite  
- **Styling**: CSS  
- **Programming Language**: JavaScript  

---

## Live Deployment
🚀 The application is live and deployed on **Vercel**.  
You can test the expert system yourself at:  

👉 [https://hippocratestool.vercel.app](https://hippocratestool.vercel.app)
