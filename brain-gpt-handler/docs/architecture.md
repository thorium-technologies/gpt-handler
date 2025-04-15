# 📐 Architecture

The backend follows a **hexagonal architecture** to ensure scalability and maintainability. The structure is divided into layers:

- **Application Layer**:  
  Contains the `app.module.ts` and `main.ts` files, which bootstrap the application.

- **Domain Layer**:  
  Encapsulates the core business logic. This includes feature modules like `enhance-code` and `programming-algorithm`.

- **Infrastructure Layer**:  
  Handles external integrations, such as the OpenAI API, located in the `common/openai` folder.

---

## Folder Structure

```bash
src/
├── common/       # Shared utilities, configurations, and interfaces
│   ├── config/   # Static configurations (e.g., OpenAI API keys)
│   ├── openai/   # OpenAI service and response handlers
├── enhance-code/ # Feature module for enhancing code
├── programming-algorithm/ # Feature module for generating algorithms
```

---

## SOLID Principles

The project adheres to SOLID principles:

- **Single Responsibility**: Each module and service has a single, well-defined responsibility.
- **Open/Closed**: Modules are open for extension but closed for modification.
- **Dependency Inversion**: High-level modules depend on abstractions (interfaces) rather than concrete implementations.
