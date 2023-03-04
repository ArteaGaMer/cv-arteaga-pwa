//Cargando Service Worker
if('serviceWorker' in navigator) 
{
    console.log('Puedes usar el Service Worker');
    //Configuración del Service Worker
    navigator.serviceWorker.register('/sw.js')  
        .then(res=>console.log('SW cargando correctamente', res))
        .catch(err=>console.log('Service worker no se ha podido registrar', err));

}
else
{
    console.log('Service worker no se puede usar');
}