# 🌸 Bloomspace Event Planner

Bloomspace is a garden venue that offers a beautiful outdoor space for weddings, tea parties, vendor markets, and special events.

This application represents the admin/management side of Bloomspace, where events are planned, organized, and prepared for clients and their guests.

## 🌿 Features
#### 📅 Schedule Client Events
- Create and manage events using a reactive form with multiple input types.
#### ✅ Form Validation
- Includes required fields, email validation, date validation, and a custom guest capacity validator.
#### 🎯 Custom Validation
- Prevents invalid end-date and ensures guest estimates stay within venue limits.
#### 🧾 Event Dashboard
- Displays all scheduled events with details such as host, dates, and deposit status.
#### 💸 Deposit Tracking
- Easily track whether a deposit has been paid for each event.
#### 💌 RSVP Form (Template-Driven)
- A guest-facing RSVP form designed for use in digital invitations.
#### 💬 User Feedback & Error Handling
- Success dialogs and validation messages provide a smooth user experience.

--- 

## 🛠️ Technologies Used
- Angular
- Angular Material
- TypeScript
- JSON Server (mock backend)
- CSS

## 🌱 Development Notes

This project was built for an Angular assignment focused on:
- Reactive vs Template-Driven forms
- Validation and custom validators
- Angular Material components
- Error handling and user feedback

During development, special attention was given to:
- Properly resetting reactive form state after submission
- Handling validation UI states (touched, pristine, etc.)
- Ensuring scheduled events load correctly when navigating between pages
- Using Angular’s change detection (ChangeDetectorRef) to resolve UI update issues and ensure data is rendered consistently

## 🌼 Future Enhancements

This project will be expanded in the next assignment. Planned improvements may include:

- ✏️ CRUD
- 📊 Enhanced dashboard insights (event counts, summaries)
- 💌 Connecting RSVP submissions to stored data (each event will have its own RSVP link) 
- 🔐 Authentication for admin access

## 🌙 About the Project

Bloomspace reflects a balance between structured functionality and calming design.
The goal was to create a simple, intuitive interface that feels welcoming while still handling real event planning logic.

--- 

## 📸 Screenshots 

## Dashboard/Event List

<img width="1681" height="1001" alt="EventList" src="https://github.com/user-attachments/assets/00ef2200-8c9e-4c39-87f9-646481e8965e" />

## Schedule Events

<img width="1679" height="1002" alt="ScheduleEvent" src="https://github.com/user-attachments/assets/eb0fa308-5564-44f4-959e-504276c836b2" />

<img width="1513" height="939" alt="ScheduleSuccess" src="https://github.com/user-attachments/assets/162678b7-5800-4b69-81b2-caa8fc369566" />

<img width="1517" height="745" alt="EventsInDatabase" src="https://github.com/user-attachments/assets/eaa962a5-e6fc-4b62-9c24-45dce1831bbe" />

## RSVP

<img width="1677" height="994" alt="RSVP" src="https://github.com/user-attachments/assets/6476b2b4-b1d6-40ef-a36a-5fb8adf71b16" />

<img width="1682" height="996" alt="RSVPSuccess" src="https://github.com/user-attachments/assets/1647e03f-556f-49fb-b085-6b0b120ea2a6" />

## Validators

<img width="1517" height="937" alt="CustomValidatorWorking" src="https://github.com/user-attachments/assets/639a77cf-1d25-4f2b-8a7b-e9a474f429e6" />

<img width="1516" height="930" alt="GreyedOutBookedDates" src="https://github.com/user-attachments/assets/0b4ba2b9-0d9d-4539-898b-fa176f4eb178" />

<img width="1887" height="991" alt="DateValidator" src="https://github.com/user-attachments/assets/3a275bd6-8f51-44b8-b1a9-8a5b79e18cca" />

<img width="1680" height="997" alt="RSVPValidators" src="https://github.com/user-attachments/assets/23187554-6dae-46e5-9dd6-18830beefe66" />

## Reset Form Issue & Fix 

<img width="1516" height="935" alt="RedAfterSuccess" src="https://github.com/user-attachments/assets/b0e09868-e94a-4262-8105-e4728b138b65" />

<img width="1123" height="985" alt="ImportFormDirective" src="https://github.com/user-attachments/assets/872ee7b8-6f19-469e-a260-006accdada59" />

<img width="1116" height="991" alt="UpdatedReset" src="https://github.com/user-attachments/assets/9cf6e3dc-e97c-4694-90d6-d079622f3464" />

<img width="1363" height="970" alt="ChangedErrorsToFix" src="https://github.com/user-attachments/assets/88cc3b02-d3c8-4690-92fa-53b9c2f44644" />

## Stuck Loading When Navigate Back to Page

<img width="1680" height="980" alt="EventsLoadingWhenNavToPage" src="https://github.com/user-attachments/assets/dc945ad1-2e20-44b6-8ed5-924965dc9f5d" />

<img width="1258" height="1032" alt="ForceUpdate" src="https://github.com/user-attachments/assets/0d5ecf27-169c-4c72-9ccb-8528eaf7aafa" />










