# Course Registration
---
> ### Project Features
* Load and display courses from a JSON file.
* User can select courses and put them into selected course list.
* Prevents user from selecting new course if total credit exceeds 20 hours.

> ### How states were managed in the project

States were managed using useState hooks. There were several states which needed to be managed. 
One of them were **selectedCourses** state which updates upon clicking the select button.
Another was **totalCredit** state which updates using _useEffect_ hook where the dependency is **selectedCourses** . 
Similarly, the state **remainingCredit** state which updates using _useEffect_ hook where the dependency is **totalCredit**