"use client";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
interface dataType {
  _id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Home = () => {
  const [data, setdata] = useState<dataType[]>([]);
  const [value, setValue] = useState("");
  const [Loading, setLoading] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [editedId, setEditedId] = useState<string | null>(null);
  const fn = () => {
    axios
      .get("https://todobymalikovshahriyor.onrender.com/api/getAll")
      .then((res) => setdata(res.data.reverse()));
  };
  useEffect(() => {
    fn();
  }, []);
  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://todobymalikovshahriyor.onrender.com/api/create", {
        text: value,
      })
      .then((res) => {
        fn();
        console.log(res.data);
        setValue("");
        setLoading(false);
      });
  };
  const handleEdit = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post(
        `https://todobymalikovshahriyor.onrender.com/api/edit/${editedId}`,
        {
          text: value,
        }
      )
      .then(() => {
        fn();
        setValue("");
        setEditedId(null);
        setEditOpen(false);
      });
  };
  const deleteFn = (id: string) => {
    axios
      .delete(`https://todobymalikovshahriyor.onrender.com/api/delete/${id}`)
      .then(() => {
        fn();
      });
  };
  return (
    <div className="flex flex-col mt-10 ">
      <div className="flex max-w-[500px] flex-col gap-3 mx-auto justify-center w-full ">
        <div className=" text-start ">
          <h1 className="text-2xl">Todo List:</h1>
        </div>
        {!editOpen ? (
          <form
            onSubmit={handleSend}
            action=""
            className="flex items-center justify-center gap-4 w-full"
          >
            <Input
              onChange={(e) => setValue(e.target.value)}
              value={value}
              type="text"
              className="!w-full"
            />
            <Button type="submit">send</Button>
          </form>
        ) : (
          <form
            onSubmit={handleEdit}
            action=""
            className="flex items-center justify-center gap-4 w-full"
          >
            <Input
              onChange={(e) => setValue(e.target.value)}
              value={value}
              type="text"
              className="!w-full"
            />
            <Button type="submit">Edit</Button>
          </form>
        )}
      </div>
      <div className="max-w-[500px] mx-auto w-full max-h-[500px] overflow-y-scroll">
        <Table className="w-full ">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Todos </TableHead>
              <TableHead className="text-center">Time</TableHead>
              <TableHead className="text-center">action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((value, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{value.text}</TableCell>
                <TableCell className="text-center">
                  {value.createdAt.slice(0, 10)}
                </TableCell>
                <TableCell className="w-fit">
                  <Menubar className="w-fit mx-auto">
                    <MenubarMenu>
                      <MenubarTrigger>✏️</MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem onClick={() => deleteFn(value._id)}>
                          delete
                        </MenubarItem>
                        <MenubarItem
                          onClick={() => {
                            setEditOpen(true);
                            setValue(value.text);
                            setEditedId(value._id);
                          }}
                        >
                          edit
                        </MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
                </TableCell>
              </TableRow>
            ))}
            {Loading && (
              <TableRow>
                <TableCell className="font-medium">
                  <Skeleton className="w-[200px] h-5  bg-black/30" />
                  <Skeleton className="w-[50px] h-5 -z-40 opacity-0  bg-black/30" />
                </TableCell>
                <TableCell className="mr-auto">
                  <Skeleton className="w-[100px] h-5 bg-black/30" />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Home;
