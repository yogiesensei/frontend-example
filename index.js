console.log('test')
const container = document.getElementById('container')

const template = (item) => {
    return `<div>
    <p>Name: ${item.name}</p
    <p>Hobby:${item.hobby}</p>
    </div>
    `
}

const connect = () => {
    fetch('http://localhost:3002')
        .then(data => data.json())
        .then(item => {
            let content = ''
            item.data.map(bio => content += template(bio))
            container.innerHTML = content
        })
}

connect()