import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

import { SafeUser } from "@/app/types";

import useLoginModal from "./useLoginModal";

interface IUseRating {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useRating = ({ listingId, currentUser }: IUseRating) => {
  const router = useRouter();

  const loginModal = useLoginModal();

  const addRating = useCallback(
    async (rating: number) => {
      if (!currentUser) {
        return loginModal.onOpen();
      }

      try {
        let request;

        request = () =>
          axios.put(`/api/listings`, {
            listingId,
            rating,
          });

        const result = await request();
        router.refresh();
        toast.success("Success");
        return result;
      } catch (error) {
        toast.error("Something went wrong.");
      }
    },
    [currentUser, listingId, loginModal, router]
  );

  return {
    addRating,
  };
};

export default useRating;
