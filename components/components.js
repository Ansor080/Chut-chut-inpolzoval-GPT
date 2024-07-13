export function addPerson() {
    const name = document.getElementById('name').value.trim();
    const age = parseInt(document.getElementById('age').value.trim());
    if (!name || isNaN(age)) {
        alert('Пожалуйста, введите корректные имя и возраст.');
        return;
    }

    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = `${name} (Age ${age})`;

    if (age < 25) {
       const user_n = document.getElementById('under-25')
       user_n.push(card)
    } else if (age < 50) {
       const user_f = document.getElementById('under-50')
       user_f.push(card)
    } else {
       const user_s = document.getElementById('above-50')
       user_s.push(card)
    }

    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
}

btn_person.onclick = () => {
    const btn_person = document.querySelector('.btn')
    addPerson()
}