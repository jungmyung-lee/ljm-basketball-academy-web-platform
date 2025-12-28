# LJM Basketball Academy — Web Platform

A responsive informational web platform built with **Next.js (App Router), React, and TypeScript** for the LJM Basketball Academy — a youth and community basketball program operated in Seongnam, South Korea.

The website was designed to help parents and participants:

- access program information
- read announcements and activity records
- check class schedules
- view authentic parent review screenshots
- submit inquiries through the contact form
- receive support through a **chat counseling channel**

The platform prioritizes **transparency, accessibility, and community trust** rather than a commercial marketing tone.

<img width="800" height="570" alt="image" src="https://github.com/user-attachments/assets/b20d695d-46a8-4d52-b527-bb9f0cdc5edf" />



---

## Table of Contents

- [Overview](#overview)
- [Project Purpose](#project-purpose)
- [Problem](#-problem--barriers-to-participation-across-diverse-social--living-environments)
- [Solution](#-solution--accessibility-centered-psychologically-supportive-and-inclusive-program-design)
- [Validation](#-validation--evidence-based-operational--community-trust-indicators)
- [Social Impact](#-social-impact--participation-access-inclusion-and-community-level-reach)
- [Key Features](#key-features)
  - [Training Program Pages](#training-program-pages)
  - [Announcements](#announcements)
  - [Class Schedule Page](#class-schedule-page)
  - [Parent Review](#parent-review)
  - [Contact Form](#contact-form)
  - [Chat Counseling Channel](#chat-counseling-channel)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Design Philosophy](#design-philosophy)
- [Author](#author)

---

## Overview

This platform was developed as both:

- a **public-facing informational website** for parents and participants, and  
- an **operational archive documenting real program activities, records, and feedback**.

Rather than functioning as a promotional site, the platform emphasizes:

- clarity and accessibility of program information
- transparency in announcements and class schedules
- community trust through authentic parent feedback
- participant well-being through a counseling communication channel

The project reflects the academy’s educational mission to support:

> participation, belonging, personal growth, and community connection.

---

## Project Purpose

This project was created to provide:

- a clear, parent-friendly informational website
- accessible program descriptions across age groups
- public visibility of class schedules and announcements
- authentic review transparency
- a structured inquiry channel
- and a **chat counseling channel** to support participants experiencing adaptation or emotional challenges

The platform serves not only as a website, but as an **operational record and community support tool**.

---

# Problem — Barriers to Participation Across Diverse Social & Living Environments

Participants came from a wide range of **family, economic, and personal living environments**, which created differences in access to community sports activities and extracurricular learning opportunities.

Some participants experienced:

- difficulty adapting to class or activity environments  
- stress related to peer or social relationships  
- emotional strain associated with personal or family situations  

In addition, there were **accessibility gaps related to physical conditions and mobility assistance use**. Across both youth and adult age groups — including wheelchair users — available options for inclusive community sports programs were limited, and the number of **qualified wheelchair-basketball coaches in the region was extremely scarce**.

> This was not an individual ability issue —  
> it was a structural limitation of program infrastructure,
> specialized coaching availability, and participation choice.

---

# Solution — Accessibility-Centered, Psychologically Supportive, and Inclusive Program Design

### 1) Age-Group Programs + Free Class Track

- elementary / middle / high school programs
- **Free Class opportunities for financially-constrained / under-resourced participants**

Designed not as charity, but to:

- reduce financial barriers
- expand participation access
- mitigate opportunity gaps in community sports engagement

---

### 2) Inclusive Sports Implementation — Wheelchair Basketball Sessions

- participation across both **youth and adult age groups**
- shared community learning environment
- emphasized **belonging, collaboration, and relational growth**

---

### 3) Chat Counseling Channel

Designed to support participants facing:

- class adaptation difficulties
- emotional or family concerns
- peer or social worries

Roles of the channel:

- provided a safe communication pathway outside of class time
- reduced psychological burden
- strengthened trust between participants and staff

This channel contributed to **improved emotional stability and healthier class adaptation experiences**.

---

### 4) Human-Centered Technical Design

The platform was developed by balancing:

- technical implementation efficiency
- with user empathy and accessibility

---

# Validation — Evidence-Based Operational & Community Trust Indicators

- Archived operational records and program announcements (2021–2024)
- Published authentic parent feedback through:
  - Naver Local Platform
  - Danggeun (local community marketplace) community channel
- Accumulated **150+ combined platform reviews**
  (Naver Smart Place + Danggeun community)
- Sustained participation observed among recurring students and families,
  particularly within the Free Class program
- Chat counseling channel contributed to:
  - improved class adaptation
  - emotional stability
  - relational and social support outcomes

> Validation focuses on **operational credibility, sustained engagement,
> and consistent qualitative feedback over time**.

---

# Social Impact — Participation Access, Inclusion, and Community-Level Reach

- Founded and managed a youth basketball academy serving **700+ cumulative participants**
  across multiple cohorts, overseeing program design, staff coordination, and parent communication

- Expanded participation access through Free Class programs for
  financially-constrained / under-resourced participants, helping reduce financial barriers
  to community sports engagement

- Promoted inclusive participation by operating wheelchair-basketball sessions
  across youth and adult age groups — addressing the regional shortage of
  specialized coaching resources and accessible sports programs

- The project’s values and activities were further amplified through
  **community collaboration**:
  - a feature video was produced in coordination with Danggeun
  - the content surpassed **170,000+ views on YouTube**
  - demonstrating meaningful **public resonance and community-level impact**

---

## Key Features

### Training Program Pages
Pages introducing program offerings across elementary, middle, and high school groups, including a **Free Class participation track** designed to reduce financial barriers and expand access for under-resourced participants.

---

### Announcements
A centralized archive of academy notices and activity records from real operational periods, improving program transparency and allowing parents to track updates and history over time.

<img width="1015" height="688" alt="image" src="https://github.com/user-attachments/assets/76785e04-d4bd-4f1d-8d20-1db1b8d134f7" />

---

### Class Schedule Page
Provides weekly class schedules and facility availability information so that families can easily confirm training times and participation logistics.

<img width="1022" height="687" alt="image" src="https://github.com/user-attachments/assets/5b3ec11f-d556-4955-9ce9-500b4e2affac" /><img width="468" height="73" alt="image" src="https://github.com/user-attachments/assets/04fceaeb-c199-408e-abd7-8e0fced21a6b" />

---

### Parent Review
Showcases authentic parent feedback through **review screenshot galleries**, reflecting real program perception and trust from the local community.

<img width="1009" height="734" alt="image" src="https://github.com/user-attachments/assets/9b7de2e7-644f-4623-966d-7e8a4eafac9b" />

---

### Contact Form
A structured inquiry form connected to a server API route, enabling parents to submit program questions or communication requests in an organized format.

<img width="1016" height="740" alt="image" src="https://github.com/user-attachments/assets/4351d340-bb54-4207-bee1-83f9f11a29ff" />

---

### Chat Counseling Channel
A communication channel for participants who experience:

- class adaptation difficulties  
- emotional or family-related concerns  
- peer or social challenges  

Designed to support **emotional stability, adaptation guidance, and trust-based communication** between participants and staff.

---

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Resend Email API
- Mobile-first responsive UI

---

## Project Structure

app/  
├─ announcements/  
├─ schedule/  
├─ reviews/  
├─ contact/  
└─ api/contact/  

components/  
├─ navigation.tsx  
├─ footer.tsx  
└─ ui/  

public/images/  
└─ review screenshots  

---

## Design Philosophy

This platform was created not as a marketing website, but as a:

- transparent operational archive
- community participation space
- and accessibility-focused service platform

Its goal was not only to support skill development, but to create an environment where participants could grow in **confidence, character, and community connection**.

---

## Author

**Jungmyung Lee**  
Founder & Head Coach — LJM Basketball Academy  
Developer — Web Platform Project

