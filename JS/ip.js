document.addEventListener('DOMContentLoaded', function() {
    const obtenerInfoButton = document.getElementById('obtenerInfo');
    const ipAddressElement = document.getElementById('ipAddress');
    const osElement = document.getElementById('os');

    obtenerInfoButton.addEventListener('click', function() {
        // Obtener la dirección IP utilizando una solicitud a una API externa
        fetch('https://api64.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                const ipAddress = data.ip;
                ipAddressElement.textContent = ipAddress;
            })
            .catch(error => {
                ipAddressElement.textContent = 'No se pudo obtener la dirección IP.';
            });

        // Obtener el sistema operativo del cliente
        const userAgent = navigator.userAgent;
        let os = 'Desconocido';

        if (userAgent.indexOf('Windows') !== -1) {
            os = 'Windows';
        } else if (userAgent.indexOf('Mac') !== -1) {
            os = 'Mac OS';
        } else if (userAgent.indexOf('Linux') !== -1) {
            os = 'Linux';
        } else if (userAgent.indexOf('Android') !== -1) {
            os = 'Android';
        } else if (userAgent.indexOf('iOS') !== -1) {
            os = 'iOS';
        }

        osElement.textContent = os;
    });
});

