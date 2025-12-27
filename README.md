
<img width="961" height="541" alt="image" src="https://github.com/user-attachments/assets/fb7df51e-636c-4db9-ae90-f7bb1223a6bc" />

# LJM Basketball Academy — Web Platform

A responsive informational web platform built with **Next.js 14, React, and TypeScript** for the LJM Basketball Academy — a youth basketball training program operated between 2022 and 2024 in Seongnam, South Korea.

The website was designed to help parents easily access program information, review announcements, check training schedules, and contact the academy.

---

## Table of Contents

- [Project Purpose](#project-purpose)
- [Key Features](#key-features)
  - [Youth Training Program Pages](#youth-training-program-pages)
  - [Announcements Page](#announcements-page)
  - [Schedule Page](#schedule-page)
  - [Parent Review Screenshot Gallery](#parent-review-screenshot-gallery)
  - [Contact Form (Email API Route)](#contact-form-email-api-route)
  - [Fully Responsive Layout](#fully-responsive-layout)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Design Philosophy](#design-philosophy)
- [License](#license)
- [Author](#author)

---

## Project Purpose

This project was created to provide:

- A clean and accessible website for parents and students
- Program information for different age groups
- Real training schedule visibility
- Contact and inquiry support
- Public transparency through real parent review screenshots

The platform prioritizes clarity, trust, and ease of use rather than marketing language or visual exaggeration.

---

## Key Features

### Youth Training Program Pages
- Elementary / Middle / High School program descriptions
- Wheelchair basketball session information
- Clear, beginner-friendly explanations

### Announcements Page
- Academy notices and activity records (2022–2023)
- Free trial programs
- Safety & training policy updates
- Schedule adjustments

<img width="780" height="489"
     src="https://github.com/user-attachments/assets/ee833d56-2e24-48e4-90bf-bf3d70756852" />
<img width="646" height="399"
     src="https://github.com/user-attachments/assets/73cad76d-5e6f-448f-ad4d-f0868c1bd5ae" />



### Schedule Page
- Weekly training timetable
- Facility-availability notices
- 
<img width="671" height="480"
     src="https://github.com/user-attachments/assets/249b55b2-cf13-4776-90ae-478a5b4f717a" />

<img width="634" height="426"
     src="https://github.com/user-attachments/assets/de5c0547-ed79-41e3-9cac-0b49a0b31134" />



### Parent Review Screenshot Gallery
- Six real review screenshots from Naver local business platform
- Used to provide authentic social proof
- Displayed in responsive gallery format

### Contact Form (Email API Route)
- Built using **Next.js App Router server actions**
- Sends structured inquiry messages to staff email

### Fully Responsive Layout
- Mobile-first design
- Tablet & desktop optimized
- Accessible typography and spacing

---

## Tech Stack

**Framework & Language**
- Next.js 14 (App Router)
- React
- TypeScript

**UI & Styling**
- Tailwind CSS
- Custom UI components
- Responsive grid & layout system

**Backend / API**
- Next.js Route Handlers (`/app/api/contact/route.ts`)
- Email request submission endpoint

**Other**
- Deployed as a static web app
- Designed for lightweight browsing on mobile devices

---

## Project Structure

app/  
├─ page.tsx # Home  
├─ announcements/ # Announcement records  
├─ schedule/ # Training schedule page  
├─ reviews/ # Review gallery (screenshot images)  
├─ contact/ # Inquiry page  
└─ api/contact/route.ts # Email submission API  

components/  
├─ navigation.tsx  
├─ footer.tsx  
├─ ui/* (shared UI components)  

public/images/  
├─ program photos  
└─ parent review screenshots  


---

## Design Philosophy

Rather than presenting a commercial “marketing website,”  
this platform focuses on:

- Honest representation of academy activities
- Real parent feedback
- Educational value for students
- Safe and structured training environment

The project reflects the academy’s original mission:

> “To help students grow in both skill and character through basketball.”

---

## License

This project is intended for **portfolio and archival purposes only**.

The images and review screenshots belong to
the original parents and students who participated in the academy.

Commercial reuse is not permitted.

---

## Author

**Jungmyung Lee**  
Founder & Head Coach — LJM Basketball Academy  
Developer — Web Platform Project



