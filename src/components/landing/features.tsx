const Features = () => {
  return (
    <div className="max-w-6xl w-full mx-auto px-4 py-20 mt-20">
      <h2 className="text-4xl font-bold mb-5">Confirmed is made for Event professionals</h2>
      <p className="text-foreground/50 max-w-5xl text-balance">Event management is though, but we are here to assist you. With the rich set of powerful features we make event management and organizaton a bit less stresful and more succesful.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10">
        <div className="border border-foreground/10 rounded-md p-5 lg:col-span-2">
          <h3 className="text-2xl font-bold mb-3">Feature 1</h3>
          <p className="text-foreground/50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </div>
        <div className="border border-foreground/10 rounded-md p-5">
          <h3 className="text-2xl font-bold mb-3">Feature 2</h3>
          <p className="text-foreground/50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </div>
        <div className="border border-foreground/10 rounded-md p-5">
          <h3 className="text-2xl font-bold mb-3">Feature 3</h3>
          <p className="text-foreground/50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </div>
        <div className="border border-foreground/10 rounded-md p-5">
          <h3 className="text-2xl font-bold mb-3">Feature 4</h3>
          <p className="text-foreground/50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </div>
        <div className="border border-foreground/10 rounded-md p-5">
          <h3 className="text-2xl font-bold mb-3">Feature 5</h3>
          <p className="text-foreground/50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;