import Image from 'next/image'
import camiseta1 from '../assets/camisetas/1.png'
import camiseta2 from '../assets/camisetas/2.png'
import camiseta3 from '../assets/camisetas/3.png'
import ProductCard, { ProductCardFooter } from '@/components/product-card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

export default async function Home() {
  return (
    <main className="flex gap-12 w-full max-w-[calc(100vw-((100vw-1180px)/2))] ml-auto min-h-[656px]">
      <Carousel opts={{ loop: false }}>
        <CarouselContent>
          <CarouselItem key={2} className="pl-8 basis-1/2">
            <ProductCard>
              <Image
                src={camiseta1}
                width={520}
                height={480}
                alt=""
                className="object-cover"
              />
              <ProductCardFooter>
                <strong className="text-lg">Camiseta X</strong>

                <span className="text-xl font-bold">R$ 79,90</span>
              </ProductCardFooter>
            </ProductCard>
          </CarouselItem>
          <CarouselItem key={2} className="pl-8 basis-1/2">
            <ProductCard>
              <Image
                src={camiseta1}
                width={520}
                height={480}
                alt=""
                className="object-cover"
              />
              <ProductCardFooter>
                <strong className="text-lg">Camiseta X</strong>

                <span className="text-xl font-bold">R$ 79,90</span>
              </ProductCardFooter>
            </ProductCard>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </main>
  )
}
