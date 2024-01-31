"use client";

import Heading from '@/components/heading';

import { MessageSquare } from 'lucide-react';

import { useForm } from 'react-hook-form';

import * as z from 'zod';

import { fromSchema } from './constants';

import { zodResolver } from '@hookform/resolvers/zod';

import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';


export default function ConversationPage() {
const form = useForm<z.infer<typeof fromSchema>>({
    resolver: zodResolver(fromSchema),
    defaultValues: {
        prompt:''
    }
});

const isLoading =form.formState.isSubmitting;

const onSubmit = async (values:z.infer<typeof fromSchema>)=>{
    console.log(values)
}

return (

    <div>
        <Heading
        title="Conversation"
        description="plaplapla"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
        />


        <div className='px-4 lg:px-8'>
            <div>
                <Form {...form}>
                    <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2'
                    >
                        <FormField
                        name='prompt'
                        render={({field})=>(
                            <FormItem className='col-span-12 lg:col-span-10'>
                                    <FormControl className='m-0 p-0'>
                                        <Input className='px-2 focus-visible:ring-2 ring-2 ring-gray-100 focus-visible:ring-gray-100 ring-offset-2 hover:ring-offset-gray-200 font-bold text-gray-700'
                                        disabled={isLoading}
                                        placeholder="Hi I'm Rain Chatbot How I Can Help you Today....? "
                                        {...field}
                                        />

                                    </FormControl>
                            </FormItem>
                        )}
                        />
                        <Button className='col-span-12 lg:col-span-2 sm:mt-5 lg:p-0 lg:m-0'>
                            Make It Rain
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    </div>
);
}
