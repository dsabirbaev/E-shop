'use client'

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ProductType } from "@/types";
import { Dialog } from "@headlessui/react";
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import CustomImage from "@/components/image";


const ProductDetailedPage = () => {

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<ProductType>();
  const [isOpen, setIsOpen] = useState(true);
  const {id} = useParams();

  const router = useRouter();

  const getData = async() => {
    setLoading(true);
    const res = await fetch(
      `https://fakestoreapi.com/products/${id}`
    );
    const result = await res.json();
    setProduct(result);
    setLoading(false);
  }

  useEffect(() => {
    getData();

   
  }, [id])

  return (
    <Dialog open={isOpen}
      onClose={() => {
        setIsOpen(false);
        router.back();
      }} 
      className='relative z-50'> 
      <div className="fixed inset-0 bg-black/30" aria-hidden="true">

          <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <Dialog.Panel
                  className={'mx-auto max-w-3xl rounded bg-white p-10'}
                >
                   {
                      loading ? (
                        <div className='h-8 w-8 rounded-full border-2 border-dotted border-blue-600 animate-spin' />
                      ):(
                        <div className="flex gap-x-8 h-96">
                            {product?.image && (
                              <div className='relative w-72 h-full hidden md:inline'>
                                <CustomImage product={product} fill />
                              </div>
                            )}
                            
                            <div className="flex flex-1 flex-col">
                              <div className="flex-1">
                                  <h4 className='font-semibold'>
                                    {product?.title}
                                  </h4>
                                  <p className='font-medium text-sm'>
                                    ${product?.price}
                                  </p>
                              </div>
                            </div>

                        </div>
                      )
                   }
                </Dialog.Panel>
              </div>
          </div>
      </div>

    </Dialog>
  )
}

export default ProductDetailedPage;