// Full ontology data
const ontologyData = {
    "Newton's Laws": {
        "Newton's First Law of Motion (Inertia)": {
            annotation: "An object at rest will remain at rest unless acted upon by an external force.",
            exampleScenario: "A car at rest remains at rest unless a force is applied."
        },
        "Newton's Second Law of Motion (F = ma)": {
            annotation: "Force is equal to mass times acceleration (F = ma).",
            exampleScenario: "A 10 N force applied to a 2 kg object results in an acceleration of 5 m/s²."
        },
        "Newton's Third Law of Motion (Action and Reaction)": {
            annotation: "For every action, there is an equal and opposite reaction.",
            exampleScenario: "When you push against a wall, the wall pushes back with an equal force."
        }
    },
    "Force": {
        "10 N Force": {
            annotation: "An individual force with a magnitude of 10 Newtons.",
            exampleScenario: "Applied to a mass of 2 kg, it causes an acceleration of 5 m/s²."
        },
        "Gravitational Force": {
            annotation: "The force exerted by the Earth or another celestial body.",
            exampleScenario: "Gravitational force pulls objects towards the center of Earth."
        },
        "Normal Force": {
            annotation: "The force exerted by a surface perpendicular to the object in contact with it.",
            exampleScenario: "A book on a table experiences a normal force equal in magnitude to its weight."
        }
    },
    "Mass": {
        "5 kg Mass": {
            annotation: "An individual representing an object with a mass of 5 kilograms.",
            exampleScenario: "The mass of an object determines how much force is required to accelerate it."
        }
    },
    "Acceleration": {
        "9.8 m/s² Acceleration": {
            annotation: "The acceleration due to gravity on Earth is approximately 9.8 m/s².",
            exampleScenario: "An object in free fall near the Earth's surface accelerates at 9.8 m/s²."
        }
    },
    "Motion": {
        "Linear Motion": {
            annotation: "An individual representing motion along a straight line.",
            exampleScenario: "A car moving in a straight line at a constant speed exhibits linear motion."
        }
    }
};

// Function to display classes dynamically
function displayClasses() {
    const classList = document.getElementById("class-list");

    // Loop through the ontology data and create list items
    for (const category in ontologyData) {
        const categoryItem = document.createElement("li");
        categoryItem.textContent = category;
        categoryItem.classList.add("category");

        // Create a sublist for each class under the category
        const sublist = document.createElement("ul");

        for (const className in ontologyData[category]) {
            const classItem = document.createElement("li");
            classItem.textContent = className;
            classItem.classList.add("class");
            classItem.onclick = function () {
                displayAnnotations(category, className);
            };
            sublist.appendChild(classItem);
        }

        categoryItem.appendChild(sublist);
        classList.appendChild(categoryItem);
    }
}

// Function to display annotations when a class is clicked
function displayAnnotations(category, className) {
    const annotationsContainer = document.getElementById("annotations-container");
    const classData = ontologyData[category][className];

    annotationsContainer.innerHTML = `
        <h4>${className}</h4>
        <p><strong>Annotation:</strong> ${classData.annotation}</p>
        <p><strong>Example Scenario:</strong> ${classData.exampleScenario}</p>
    `;
}

// Initialize the display
displayClasses();
