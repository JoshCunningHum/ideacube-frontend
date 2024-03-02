import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { IconArrowLeft, IconClock, IconPlus } from "@tabler/icons-react";
import {
  ActionIcon,
  FileInput,
  FileInputProps,
  Pill,
  TextInput,
  Textarea,
  rem,
} from "@mantine/core";
import { TimeInput } from "@mantine/dates";

export const Route = createFileRoute("/_admin/task/createtask")({
  component: RouteComponent,
});

const ValueComponent: FileInputProps["valueComponent"] = ({ value }) => {
  if (value === null) {
    return null;
  }

  if (Array.isArray(value)) {
    return (
      <Pill.Group>
        {value.map((file, index) => (
          <Pill key={index}>{file.name}</Pill>
        ))}
      </Pill.Group>
    );
  }
};

function RouteComponent() {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);
  const [dueTime, setDueTime] = useState<string>("");
  const timePickerRef = useRef<HTMLInputElement>(null);

  function addFile(files: any) {
    if (files === null) {
      return;
    }

    setFiles(files);
  }

  const pickerControl = (
    <ActionIcon
      variant="subtle"
      color="gray"
      onClick={() => timePickerRef.current?.showPicker()}
    >
      <IconClock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
    </ActionIcon>
  );

  useEffect(() => {
    console.log(dueTime);
  }, [dueTime]);

  return (
    <>
      <div className="flex flex-col gap-4 px-8">
        <IconArrowLeft
          onClick={() => router.history.back()}
          className="h-10 w-10 rounded-full hover:cursor-pointer hover:bg-neutral-300"
        />
        <div className="flex flex-row gap-24">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">Title</p>
              <TextInput
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Title"
                size="md"
                radius="md"
                className="w-96"
              />
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">Description</p>
              <Textarea
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
                size="md"
                radius="md"
                className="w-96"
              />
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">Task Materials</p>
              <FileInput
                multiple
                clearable
                onChange={(file) => addFile(file)}
                placeholder="Select Files"
                size="md"
                radius="md"
                className="w-96 rounded-lg bg-white"
                valueComponent={ValueComponent}
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">Time Due</p>
              <TimeInput
                placeholder="Select Time"
                size="md"
                radius="md"
                className="rounded-lg bg-white"
                ref={timePickerRef}
                rightSection={pickerControl}
                onChange={(e) => setDueTime(e.target.value)}
              />
            </div>

            <button className="flex flex-row items-center justify-center gap-2 rounded bg-black py-2 font-bold text-white ">
              <IconPlus />
              Add Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
