import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { loggedIn } from "@/Redux/reducers/login";
import axios from 'axios';

// Define the schema for form validation
const formSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters").max(50, "Username must be at most 50 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoading(true);
    setError(null);

    try {

      const params = new URLSearchParams({
        email: data.username,
        password: data.password,
      });

      const response = await axios.post(
        `https://kb.etvbharat.com/keycloak/wp-json/users/v1/checklogin`,
        params,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      const result = response.data;
      localStorage.setItem('access_token', result.access_token);
      dispatch(loggedIn(true));
      navigate("/");
    } catch (error) {
      setError((error as Error).message);
      dispatch(loggedIn(false));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background text-foreground flex-grow flex items-center justify-evenly">
      <div className="space-y-4 p-4">
        <h2 className="text-8xl mb-4">Etv Bharat</h2>
        <h1 className="text-xl font-semibold w-96 px-2">
          Login to access and enjoy our exclusive articles, tailored to your interests.
        </h1>
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
                    <Link to='/forgotPassword'> Forgot Password?</Link> or
                    <Link to='/signUp'>Sign Up</Link>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Submit'}
            </Button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
