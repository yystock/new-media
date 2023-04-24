"use client";
import {
  Button,
  Loading,
  Popover,
  Row,
  Spacer,
  Text,
  Textarea,
} from "@nextui-org/react";
import { SafeUser } from "../types";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface AddPostProps {
  currentUser?: SafeUser | null;
}
const AddPost: React.FC<AddPostProps> = ({
  currentUser
}) => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Error creating post.");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    if (content.length < 1) {
      setErrorMessage("Post cannot be empty.");
      setError(true);
    } 
    else {
      try {
        const res = await fetch("/api/addPost", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: content,
          }),
        });
        if (res.ok) {
          setContent("");
          router.refresh();
        }
        setError(false);
      } catch {
        setErrorMessage("Error creating post.");
        setError(true);
      }
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <Textarea
        size="xl"
        bordered
        disabled={!currentUser}
        width="100%"
        label={currentUser ? "Write your thoughts:" : "Please sign in to post."}
        placeholder={currentUser ? "Enter your amazing ideas..." : ""}
        value={content}
        maxLength={300}
        onChange={(e) => setContent(e.target.value)}
      />
      <Spacer y={0.5} />
      <Row wrap="wrap" align="center" justify="space-between">
        <Popover isOpen={error} onOpenChange={setError} placement="right">
          <Popover.Trigger>
            <Button type="submit" disabled={!currentUser}>
              {loading ? <Loading color="currentColor" size="sm" /> : "Post"}
            </Button>
          </Popover.Trigger>
          <Popover.Content>
            <Text css={{ p: "$10" }}>{errorMessage}</Text>
          </Popover.Content>
        </Popover>

        <Text>{content.length}/300</Text>
      </Row>

      <Spacer y={2} />
    </form>
  );
}

export default AddPost;