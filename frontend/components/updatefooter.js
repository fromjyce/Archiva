const Footer = () => {
    return (
      <footer className="bg-[#588b8bff] text-[#100c08] py-1 px-6 text-center poppins">
        <p>
          Developed by{' '}
            <strong>Team Genesis</strong>{' '}
          for{' '}
          <a
            href="https://pechacks2.devfolio.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f28f3bff] hover:text-[#ffd5c2ff]"
          >
            <strong className="chakra_petch">PEC HACKS 2.0</strong>
          </a>{' '}
          Hackathon
        </p>
      </footer>
    );
  };
  
  export default Footer;