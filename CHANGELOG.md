
---

## ✅ Generate CHANGELOG.md

Create `CHANGELOG.md` at your repo root so you can track changes going forward:

```markdown
# Changelog

All notable changes to this project will be documented here.

## [Unreleased]
- Planned: add real-time chat support
- Planned: dockerize deployment

## [v1.0.0] - YYYY-MM-DD
### Added
- Initial integration of React frontend with Django API
- Vehicle listing and detailed view with dynamic data
- Enquiry form with API POST
- Admin interface for Vehicles and Enquiries
- Authentication pages (register/login)
- Featured cars fetched dynamically on homepage

### Changed
- Updated `VehicleImage` model to support local file uploads
- Updated CarsPage and CarDetailPage to fetch from API instead of mockData
- Added Enquiries app with REST endpoint

### Removed
- Static mockData for vehicles (now dynamic)

