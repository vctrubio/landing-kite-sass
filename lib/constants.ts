import {
  HelmetIcon,
  HeadsetIcon,
  BookmarkIcon,
  BookingIcon,
  KiteIcon,
  EquipmentIcon,
  PaymentIcon,
  FlagIcon,
  AdminIcon,
} from "@/components/icons";
import { UserCheck } from "lucide-react";

// Mock enum values for landing page
export const LESSON_STATUS_ENUM_VALUES = ["planned", "rest", "delegated", "completed", "cancelled"] as const;
export type LessonStatus = (typeof LESSON_STATUS_ENUM_VALUES)[number];

export const BOOKING_STATUSES = ["active", "available", "completed", "uncomplete"] as const;
export type BookingStatus = (typeof BOOKING_STATUSES)[number];

export const LANGUAGES_ENUM_VALUES = ["English", "Spanish", "French", "German", "Polish"] as const;
export type Language = (typeof LANGUAGES_ENUM_VALUES)[number];

export const EVENT_STATUS_ENUM_VALUES = ["planned", "tbc", "completed", "cancelled"] as const;
export type EventStatus = (typeof EVENT_STATUS_ENUM_VALUES)[number];

export const LOCATION_ENUM_VALUES = ["Los Lances", "Valdevaqueros", "Punta Paloma"] as const;
export type Location = (typeof LOCATION_ENUM_VALUES)[number];

// Entity data for forms and documentation
export const ENTITY_DATA = [
  {
    name: "Student",
    icon: HelmetIcon,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500",
    hoverColor: "#fef3c7", // yellow-100
    link: "/students",
    description: [
      "Students create bookings.",
      "Can only have one active booking at a time.",
    ],
  },
  {
    name: "Teacher",
    icon: HeadsetIcon,
    color: "text-green-500",
    bgColor: "bg-green-500",
    hoverColor: "#d1fae5", // green-100
    link: "/teachers",
    description: [
      "Our employees, each has a commission rate for a lesson and earn money.",
      "Payments are used to deduct earnings from the total.",
    ],
    many_to_many: [
      {
        name: "Teacher Kite",
        link: "/teachers",
        icon: KiteIcon,
        color: "text-lime-500",
        bgColor: "bg-lime-500",
      },
    ],
  },
  {
    name: "Package",
    icon: BookmarkIcon,
    color: "text-orange-500",
    bgColor: "bg-orange-500",
    hoverColor: "#fed7aa", // orange-100
    link: "/packages",
    description: [
      "Determines the duration, capacity, and kites for the booking.",
    ],
  },
  {
    name: "Booking",
    icon: BookingIcon,
    color: "text-blue-500",
    bgColor: "bg-blue-500",
    hoverColor: "#dbeafe", // blue-100
    link: "/bookings",
    description: [
      "Has a start date and end date.",
      "References come from user accounts.",
    ],
    many_to_many: [
      {
        name: "Booking Student",
        link: "/bookings",
        icon: AdminIcon,
        color: "text-gray-500",
        bgColor: "bg-gray-500",
      },
    ],
  },
  {
    name: "Lesson",
    icon: FlagIcon,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500",
    hoverColor: "#cffafe", // cyan-100
    link: "/lessons",
    description: [
      "Represents a scheduled lesson, linked to a teacher, booking, and commission.",
    ],
  },
  {
    name: "Event",
    icon: KiteIcon,
    color: "text-teal-500",
    bgColor: "bg-teal-500",
    hoverColor: "#ccfbf1", // teal-100
    link: "/events",
    description: [
      "Must be derived from a lesson.",
      "Has a duration and kite that was used.",
    ],
    many_to_many: [
      {
        name: "Kite Event",
        link: "/events",
        icon: KiteIcon,
        color: "text-brown-500",
        bgColor: "bg-brown-500",
      },
    ],
  },
  {
    name: "Kite",
    icon: EquipmentIcon,
    color: "text-purple-500",
    bgColor: "bg-purple-500",
    hoverColor: "#e9d5ff", // purple-100
    link: "/kites",
    description: ["Added and used for tracking of usage in each event."],
  },
  {
    name: "Payment",
    icon: PaymentIcon,
    color: "text-amber-500",
    bgColor: "bg-amber-500",
    hoverColor: "#fef3c7", // amber-100
    link: "/payments",
    description: ["Records payments made to teachers."],
  },
  {
    name: "Reference",
    icon: UserCheck,
    color: "text-gray-500",
    bgColor: "bg-gray-500",
    hoverColor: "#f1f5f9", // slate-100
    link: "/references",
    description: [
      "Referenced bookings and user notes.",
      "Links bookings to user wallet references.",
    ],
  },
] as const;