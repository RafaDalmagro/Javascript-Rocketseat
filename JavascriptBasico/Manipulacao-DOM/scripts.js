// const guest = document.querySelector("#guest-1")

// console.log(guest.textContent)
// guest.textContent = "Rafael Lima"


// console.log(guest.innerHTML);
// console.log(guest.innerText);
// console.log(guest.textContent);

// const input = document.querySelector("#name")

// input.classList.add("input-error")
// input.classList.remove("input-error")

// input.classList.toggle("input-error")

// const button = document.querySelector("button")
// button.style.backgroundColor = "red"

// const guests = document.querySelector("ul")

// const newGuest = document.createElement("li")
// newGuest.classList.add("guest")
// const guestName = document.createElement("span")

// guestName.textContent = "Rafael"

// newGuest.append(guestName)
// guests.prepend(newGuest)

// const input = document.querySelector("iput")
// input.setAttribute("disabled", true)
// input.setAttribute("type", "number")

window.addEventListener("load", ()=>{
	console.log("A página foi carregada!");
})

addEventListener("click", (event)=>{
	event.preventDefault()
	// console.log(event);

	console.log(event.target)
	
})
