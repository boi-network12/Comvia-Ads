# 🚀 Comvia Ads Backend Architecture

> **Purpose:** This document serves as the backend blueprint for Comvia Ads. It outlines the project structure, services, APIs, models, environment variables, and overall architecture to guide development.

---

# 🏗 Tech Stack

* Node.js
* Express.js
* TypeScript
* MongoDB
* Mongoose
* Redis
* BullMQ
* JWT Authentication
* Cloudinary
* Socket.IO (Future)
* Docker (Future)

---

# 📁 Folder Structure

```text
backend/
│
├── src/
│
├── config/
│   ├── db.ts
│   ├── env.ts
│   ├── redis.ts
│   ├── logger.ts
│   ├── cloudinary.ts
│   ├── googleAds.ts
│   ├── metaAds.ts
│   ├── tiktokAds.ts
│   ├── stripe.ts
│   ├── paystack.ts
│   ├── flutterwave.ts
│   ├── crypto.ts
│   └── ai.ts
│
├── middleware/
│   ├── auth.middleware.ts
│   ├── company.middleware.ts
│   ├── upload.middleware.ts
│   ├── validation.middleware.ts
│   ├── rateLimit.middleware.ts
│   ├── cors.middleware.ts
│   ├── error.middleware.ts
│   └── admin.middleware.ts
│
├── routes/
│   ├── auth.routes.ts
│   ├── company.routes.ts
│   ├── campaign.routes.ts
│   ├── creative.routes.ts
│   ├── audience.routes.ts
│   ├── analytics.routes.ts
│   ├── payment.routes.ts
│   ├── billing.routes.ts
│   ├── upload.routes.ts
│   ├── platform.routes.ts
│   ├── notification.routes.ts
│   ├── ai.routes.ts
│   └── webhook.routes.ts
│
├── controllers/
│   ├── auth.controller.ts
│   ├── company.controller.ts
│   ├── campaign.controller.ts
│   ├── payment.controller.ts
│   ├── analytics.controller.ts
│   ├── upload.controller.ts
│   ├── notification.controller.ts
│   ├── ai.controller.ts
│   ├── platform.controller.ts
│   └── webhook.controller.ts
│
├── services/
│   ├── auth.service.ts
│   ├── company.service.ts
│   ├── campaign.service.ts
│   ├── payment.service.ts
│   ├── analytics.service.ts
│   ├── upload.service.ts
│   ├── ai.service.ts
│   ├── notification.service.ts
│   ├── queue.service.ts
│   └── platform.service.ts
│
├── integrations/
│   ├── google/
│   │   ├── auth.ts
│   │   ├── campaign.ts
│   │   ├── analytics.ts
│   │   └── budget.ts
│   │
│   ├── meta/
│   │   ├── auth.ts
│   │   ├── campaign.ts
│   │   ├── analytics.ts
│   │   └── creatives.ts
│   │
│   ├── tiktok/
│   ├── linkedin/
│   ├── x/
│   └── pinterest/
│
├── jobs/
│   ├── createCampaign.job.ts
│   ├── analytics.job.ts
│   ├── optimizeCampaign.job.ts
│   ├── syncCampaign.job.ts
│   ├── payment.job.ts
│   └── notification.job.ts
│
├── queues/
│   ├── campaign.queue.ts
│   ├── analytics.queue.ts
│   ├── payment.queue.ts
│   └── notification.queue.ts
│
├── models/
│   ├── User.ts
│   ├── Company.ts
│   ├── Campaign.ts
│   ├── Creative.ts
│   ├── Audience.ts
│   ├── PlatformConnection.ts
│   ├── PlatformCampaign.ts
│   ├── Payment.ts
│   ├── Wallet.ts
│   ├── Invoice.ts
│   ├── Analytics.ts
│   ├── Notification.ts
│   ├── Activity.ts
│   ├── Team.ts
│   ├── Role.ts
│   └── AuditLog.ts
│
├── validators/
│
├── utils/
│
├── constants/
│
├── interfaces/
│
├── types/
│
├── docs/
│
├── app.ts
└── server.ts
```

---

# 🔐 Authentication

Current

* Name
* Email
* Password

Future

* Google Login
* Microsoft Login
* GitHub Login

Authentication Flow

```text
Register

↓

Verify Email

↓

Login

↓

JWT Token

↓

Protected Routes
```

---

# 📢 Campaign Flow

```text
User

↓

Create Campaign

↓

Upload Media

↓

Configure Audience

↓

Set Budget

↓

Select Platforms

↓

Payment

↓

Queue Campaign

↓

Platform APIs

↓

Campaign Running

↓

Analytics
```

---

# 🌍 Supported Platforms

## Phase 1

* Google Ads
* Facebook
* Instagram
* TikTok

## Phase 2

* LinkedIn
* X (Twitter)
* Pinterest
* Snapchat

---

# 🗂 Database Models

## User

* id
* fullName
* email
* password
* companyId
* role

---

## Company

* id
* ownerId
* companyName
* website
* logo
* industry

---

## Campaign

* id
* companyId
* campaignName
* objective
* status
* budget
* currency
* startDate
* endDate

---

## Creative

* id
* campaignId
* image
* video
* headline
* description
* CTA
* landingPage

---

## Audience

* id
* campaignId
* countries
* states
* cities
* gender
* age
* languages
* interests

---

## PlatformConnection

Stores OAuth tokens for connected advertising accounts.

---

## PlatformCampaign

Maps Comvia campaigns to each advertising platform.

---

## Payment

Stores

* amount
* provider
* status
* transactionId

---

## Wallet (Future)

Used if Comvia later supports wallet-based advertising.

---

## Analytics

Stores

* Clicks
* Impressions
* CTR
* CPC
* CPM
* Reach
* Conversions

---

# 🔌 Third-Party APIs

## Advertising

* Google Ads API
* Meta Marketing API
* TikTok Marketing API
* LinkedIn Marketing API
* X Ads API
* Pinterest Ads API

---

## Authentication

* Google OAuth
* Microsoft OAuth
* GitHub OAuth

---

## Payments

Global

* Stripe
* PayPal

Africa

* Paystack
* Flutterwave

Crypto

* NOWPayments
* Coinbase Commerce
* Cryptomus

---

## AI

* OpenAI
* Gemini

---

## Email

* Resend

---

## Storage

* Cloudinary

Future

* AWS S3

---

## Analytics

* Google Analytics
* PostHog

---

## Queue

* BullMQ

Redis

---

# ⚙ Environment Variables

```env
############################################
# APP
############################################

NODE_ENV=development
PORT=5000

############################################
# CLIENT
############################################

CLIENT_URL=http://localhost:3000

############################################
# DATABASE
############################################

MONGODB_URI=

############################################
# JWT
############################################

JWT_SECRET=
JWT_EXPIRES_IN=7d

############################################
# REDIS
############################################

REDIS_URL=

############################################
# CLOUDINARY
############################################

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

############################################
# STRIPE
############################################

STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

############################################
# PAYSTACK
############################################

PAYSTACK_SECRET_KEY=

############################################
# FLUTTERWAVE
############################################

FLUTTERWAVE_SECRET_KEY=

############################################
# COINBASE
############################################

COINBASE_API_KEY=

############################################
# NOWPAYMENTS
############################################

NOWPAYMENTS_API_KEY=

############################################
# CRYPTOMUS
############################################

CRYPTOMUS_API_KEY=

############################################
# GOOGLE OAUTH
############################################

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT_URI=

############################################
# GOOGLE ADS
############################################

GOOGLE_DEVELOPER_TOKEN=
GOOGLE_ADS_CLIENT_ID=
GOOGLE_ADS_CLIENT_SECRET=

############################################
# META
############################################

META_APP_ID=
META_APP_SECRET=
META_REDIRECT_URI=

############################################
# TIKTOK
############################################

TIKTOK_CLIENT_KEY=
TIKTOK_CLIENT_SECRET=
TIKTOK_REDIRECT_URI=

############################################
# LINKEDIN
############################################

LINKEDIN_CLIENT_ID=
LINKEDIN_CLIENT_SECRET=

############################################
# X
############################################

X_CLIENT_ID=
X_CLIENT_SECRET=

############################################
# OPENAI
############################################

OPENAI_API_KEY=

############################################
# GEMINI
############################################

GEMINI_API_KEY=

############################################
# RESEND
############################################

RESEND_API_KEY=
FROM_EMAIL=noreply@comviaads.com
```

---

# 🚀 Future Features

* AI Campaign Generator
* AI Audience Suggestions
* AI Budget Optimization
* AI Ad Copy Generator
* AI Creative Generator
* Campaign Scheduling
* Auto Budget Allocation
* A/B Testing
* Campaign Templates
* Team Collaboration
* Multi-Company Support
* White Label Support
* API Access
* Webhooks
* Custom Reports
* Campaign Automation

---

# 🎯 Long-Term Goal

Comvia Ads is part of the larger Comvia ecosystem.

```text
Comvia

├── 💬 Chat
├── 📢 Ads
├── 🤖 AI
├── 👥 CRM
├── 📊 Analytics
├── 📧 Email Marketing
├── 📱 SMS Marketing
├── 📞 Calling
├── ⚙️ Automation
└── 🌍 Customer Growth Platform
```

---

# 📌 Development Principle

Every feature should answer one question:

> **"Does this make advertising easier for the user?"**

If the answer is **yes**, build it.

If the answer is **no**, simplify it until it does.
