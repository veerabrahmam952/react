// const queryIP = "172.16.254.1";

const isValidIPV4 = (ip) => {
    const ipElements = ip.split(".");

    //Verify the length and leading zeros
    let isValid = true;

    if (ipElements.length !== 4) {
        console.log("Invalid IP address: Incorrect number of octets.");
    } else {
        for (let element of ipElements) { 
            if (element.length === 0 || (element.length > 1 && element[0] === '0')) {
                isValid = false;
                // console.log("Invalid IP address: Leading zeros detected.");
                break;
            }
            const num = Number(element);
            if (isNaN(num) || num < 0 || num > 255) {
                isValid = false;
                // console.log("Invalid IP address: Octet out of range.");
                break;
            }

        }
        if(isValid) {
            // console.log("IPv4");
            return true;
        }
        return false;
    }
}

const isValidIpv6 = (ip) => {
    const ipElements = ip.split(":");

    //Verify length of element and hexa decimal values

    let isValid = true;

    if(ipElements.length != 8) {
        console.log("Invalid IP address: Incorrect number of segments.");
    } else {
        const hexDigits = /^[0-9a-fA-F]{1,4}$/;
        for (let element of ipElements) {
            if(!hexDigits.test(element)) {
                isValid = false;
                // console.log("Invalid IP address: Invalid hexadecimal segment.");
                break;
            }
            if(element.length < 1 || element.length > 4) {
                isValid = false;
                // console.log("Invalid IP address: Segment length out of range.");
                break;
            }
        }
        if(isValid) {
            // console.log("IPv6");
            return true;
        }
        return false;
    }

}

// isValidIPV4("192.6.0.0");
// isValidIpv6("2001:0db8:85a3::8A2E:037j:7334");

const isValidIP = (ip) => {
    if(ip.includes(".")) {
        const isValid = isValidIPV4(ip);
        if(isValid) {
            console.log("IPv4");
        } else {
            console.log("Neither");
        }
    } else if(ip.includes(":")) {
        const isValid = isValidIpv6(ip);
        if(isValid) {
            console.log("IPv6");
        } else {
            console.log("Neither");
        }
    }
}

isValidIP("192.168.1.00")
