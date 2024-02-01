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
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const result = response.json();
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

          </div>
      </div>

    </Dialog>
  )
}

export default ProductDetailedPage;