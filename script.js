
async function getAddressByCep(){
    const cep = document.getElementById('cep').value;
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      console.log(data);
      document.getElementById('Logradouro').innerHTML = data.logradouro;
      document.getElementById('Localidade').innerHTML = data.localidade;
      document.getElementById('Bairro').innerHTML = data.bairro;   
      return data;   
    } catch (error){
      alert("Error")
    }
}  

async function viaCep(){
    const lat = document.getElementById('Latitude').value;
    const lon = document.getElementById('Longitude').value;

    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`);
        const data = await response.json();
        console.log(data);
        document.getElementById('result-temperature').innerHTML = `<div>Previsão de tempo de acordo com a região: ${data.hourly.temperature_2m[0]}°C</div>`    
        return data;       
      } catch (error){
        alert("Error")
      }     
    }


    
    
    
  