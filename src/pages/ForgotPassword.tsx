import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { DividerHorizontalIcon } from "@radix-ui/react-icons";

// Define the schema for form validation
const formSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const ForgotPassword = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const navigate = useNavigate();
  
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);

    // Dummy API call
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(json => {
        alert("Success:");
        navigate("/login");
      })
      .catch(error => {
        console.error("Error:", error);
        alert("error")
      });
  };

  return (
    <div className="bg-background text-foreground flex-grow flex items-center justify-evenly">
      <div className="space-y-4 p-4">
        <h2 className="text-8xl mb-4">Etv Bharat</h2>
        <h1 className="text-xl font-semibold w-96 px-2">Reset Your password and access the Login</h1>
      </div>
      <div className="space-y-4 p-4 w-80 divide-y divide-slate-300 ">
        <h2 className="text-3xl text-center font-semibold ">Forgot Password</h2>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="example@example.com" {...field} />
                  </FormControl>
                  <FormDescription className="flex gap-2">
                    <Link to="/login">Already have a Login?</Link> or
                    <Link to='/signUp'>Sign Up</Link>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
