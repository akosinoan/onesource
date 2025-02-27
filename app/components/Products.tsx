import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export const Products = () => (
  <div className="w-full pt-10 ">
    <div className="container mx-auto">
      <div className="flex text-center justify-center items-center gap-4 flex-col">
        <div className="flex gap-2 flex-col">
          <h2 className="text-5xl md:text-6xl tracking-tighter max-w-xl text-center font-regular bg-gradient-to-b from-blue-950 via-blue-600 to-blue-300 text-transparent bg-clip-text inline-block ">
            What We Offer?
          </h2>
        </div>
        <div className="grid pt-2 text-left grid-cols-1 lg:grid-cols-2 w-full gap-8">
          <Product title={ `Variety of Shirts` } productlist={[`T-shirts : round neck, V-neck  & long sleeve` , `Polo Shirts`, `Corporate or casual wear`, `Uniforms and workwear`]} />
          <Product title={ `Customization Options` } productlist={[`Screen & DTF Printing` , `Embroidery for logos and branding`]} />
          <Product title={ `Flexible Supply Solutions` } productlist={[`Small & large batch production` , `Competitive bulk pricing`]} />
          <Product title={ `Quality Assurance` } productlist={[`Use of premium fabrics for comfort and durability` , `Strict quality control at every production stage`]} />
        </div>
      </div>
    </div>
  </div>
);

const Product =(props :any) =>{return(
    <Card className="w-full shadow-2xl shadow-blue-200 rounded-md">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-normal text-4xl bg-gradient-to-b from-blue-950 via-blue-600 to-blue-300 text-transparent bg-clip-text  ">
                  {props.title}
                </span>
              </CardTitle>
              <CardDescription>
              
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8 justify-start">
                
                <div className="flex flex-col gap-2 justify-start">
                  <div className="flex flex-row gap-4">
                      
                    <ul className={`list-disc px-10 text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl`}>
                    {props.productlist.map((item :string,index:number) => (
                        <li key={index}> {item}</li>
                    ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          )
}