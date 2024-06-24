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
  username: z.string().min(2, "Username must be at least 2 characters").max(50, "Username must be at most 50 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"), // Add password validation
});

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "", // Default value for password
    },
  });
const navigate = useNavigate()
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
        console.log("Success:", json);
        navigate("/")
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="bg-background text-foreground flex-grow flex items-center justify-evenly">
      <div className="space-y-4 p-4">
        <h2 className="text-8xl mb-4">Etv Bharat</h2>
        <h1 className="text-xl font-semibold w-96 px-2">Login to access and enjoy our exclusive articles, tailored to your interests.</h1>
        {/* <NavLink to="/" className={buttonVariants()}>Back to Home</NavLink> */}
      </div>
      <div className="space-y-4 p-4 w-80 divide-y divide-slate-300">
        <h2 className="text-3xl text-center font-semibold ">Login</h2>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="******" {...field} />
                  </FormControl>
                  <FormDescription className="flex gap-2">
                  <Link to='/forgotPassword'> Forgot Password?</Link>or
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

export default Login;
