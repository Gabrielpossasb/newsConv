import { Stripe } from '@stripe/stripe-js';
import { signIn, useSession } from 'next-auth/react';
import { FormEvent } from 'react';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss'

interface SubscribeButtonProps {
   priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
   const {data: status} = useSession()
   //console.log(status)

   async function handleSubscribe(e: FormEvent) {
      e.preventDefault()

      if (status === null) {
         console.log('oi')
         signIn('github')
         return;
      }

      try {
         const response = await api.post('/subscribe')

         const { sessionId } = response.data;
         
         console.log(response)

         const stripe = await getStripeJs()

         await stripe?.redirectToCheckout({ sessionId })
      } catch (err) {
         alert(err);
      }
   }

   return (
      <button
         type="button"
         className={styles.subscribeButton}
         onClick={(e) =>handleSubscribe(e)}
      >
         Subscribe now
      </button>
   );
}