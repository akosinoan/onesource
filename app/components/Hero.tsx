

export const Hero =(props :any) =>{
    return(
        <div className="w-full">
        <div className="container mx-auto">
          <div className="flex gap-8 pt-20 lg:pt-40 items-center justify-center flex-col">
            <div className="flex gap-4 flex-col">
                {props.imgSrc ? <img className={`w-full h-30`} src={ props.imgSrc } alt={props.imgAlt}  />: '' }
              <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular bg-gradient-to-b from-blue-950 via-blue-600 to-blue-300 text-transparent bg-clip-text inline-block ">
                {props.title}
              </h1>
              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                {props.content}
              </p>
            </div>
            </div>
        </div>
      </div>
    );
}

