
import React from 'react';
import { Canvas } from './types';
import { 
  HeartIcon, BeakerIcon, GlobeAltIcon, CpuChipIcon, ScaleIcon, CommandLineIcon, BookOpenIcon, 
  BanknotesIcon, UserGroupIcon, BuildingStorefrontIcon, CubeTransparentIcon, RocketLaunchIcon, 
  ChartBarIcon, MusicalNoteIcon, WrenchScrewdriverIcon, AcademicCapIcon, MapIcon, LifebuoyIcon, 
  UsersIcon, VariableIcon, SparklesIcon, PuzzlePieceIcon, CodeBracketIcon, SunIcon, CloudIcon,
  CircleStackIcon, ChatBubbleLeftRightIcon, LockClosedIcon, FingerPrintIcon, CameraIcon, WifiIcon
} from '@heroicons/react/24/outline';

export const CANVAS_DATA: Canvas[] = [
  { id: 'LSC-4321', name: 'Lovestory Canvas', description: 'AI-powered narrative engine for complex storylines and character arcs.', icon: <HeartIcon className="h-8 w-8 text-pink-400"/> },
  { id: 'QBIC-1111', name: 'Quantum Builder', description: 'Design new materials and molecular structures at a quantum level.', icon: <CubeTransparentIcon className="h-8 w-8 text-cyan-400"/> },
  { id: 'BFC-9876', name: 'Body Fitness Canvas', description: 'Hyper-personalized biomechanical simulator for workout optimization.', icon: <SparklesIcon className="h-8 w-8 text-green-400"/> },
  { id: 'MG-7654', name: 'MacBook Grapherverse', description: 'Hardware design and simulation suite for electronic devices.', icon: <CpuChipIcon className="h-8 w-8 text-gray-400"/> },
  { id: 'AV-3219', name: 'Audioverse', description: 'Compose, analyze, and synthesize complex audio landscapes.', icon: <MusicalNoteIcon className="h-8 w-8 text-purple-400"/> },
  { id: 'EV-1234', name: 'Einstein Verse', description: 'A relativistic physics playground to visualize cosmic phenomena.', icon: <RocketLaunchIcon className="h-8 w-8 text-indigo-400"/> },
  { id: 'PV-6789', name: 'Pythagorasverse', description: 'Explore and prove mathematical theorems in a visual environment.', icon: <VariableIcon className="h-8 w-8 text-orange-400"/> },
  { id: 'CV-5432', name: 'ChemoVerse', description: 'Simulate chemical reactions and discover new compounds.', icon: <BeakerIcon className="h-8 w-8 text-teal-400"/> },
  { id: 'MV-1098', name: 'Medicoverse', description: 'Model drug interactions and simulate biological systems.', icon: <LifebuoyIcon className="h-8 w-8 text-red-400"/> },
  { id: 'PV-8765', name: 'Psycheverse', description: 'A dynamic model of the human psyche and cognitive processes.', icon: <UserGroupIcon className="h-8 w-8 text-yellow-400"/> },
  { id: 'LV-4321', name: 'LiteratureVerse', description: 'Analyze literary works and generate new styles of prose and poetry.', icon: <BookOpenIcon className="h-8 w-8 text-amber-500"/> },
  { id: 'HV-7654', name: 'Historioverse', description: 'Simulate historical events and explore alternate timelines.', icon: <MapIcon className="h-8 w-8 text-lime-500"/> },
  { id: 'PV-2109', name: 'PhysiVerse', description: 'A comprehensive physics engine for simulating physical laws.', icon: <ScaleIcon className="h-8 w-8 text-blue-400"/> },
  { id: 'NV-8765', name: 'Nutriverse', description: 'Model nutritional science and design personalized diets.', icon: <SunIcon className="h-8 w-8 text-yellow-300"/> },
  { id: 'NV-1111', name: 'NexoriaVerse', description: 'The core canvas for Nexus architecture and system design.', icon: <CircleStackIcon className="h-8 w-8 text-sky-400"/> },
  { id: 'IV-1234', name: 'Instagraverse', description: 'Simulate social media trends and information diffusion.', icon: <CameraIcon className="h-8 w-8 text-fuchsia-500"/> },
  { id: 'MV-9876', name: 'Musiverse', description: 'An advanced version of Audioverse for orchestral and AI composition.', icon: <MusicalNoteIcon className="h-8 w-8 text-violet-500"/> },
  { id: 'CV-6543', name: 'Codiverse', description: 'Generate, debug, and optimize code in any programming language.', icon: <CodeBracketIcon className="h-8 w-8 text-green-500"/> },
  { id: 'MV-3421', name: 'Mechanoverse', description: 'Design and test complex mechanical systems and robotics.', icon: <WrenchScrewdriverIcon className="h-8 w-8 text-gray-500"/> },
  { id: 'VV-8765', name: 'Virtuoverse', description: 'Create and render immersive AR/VR experiences.', icon: <FingerPrintIcon className="h-8 w-8 text-cyan-300"/> },
  { id: 'MAV-7654', name: 'Mathemaverse', description: 'A universal calculator and solver for all mathematical fields.', icon: <VariableIcon className="h-8 w-8 text-orange-500"/> },
  { id: 'OV-4321', name: 'Organizaverse', description: 'Model business processes and optimize organizational structures.', icon: <PuzzlePieceIcon className="h-8 w-8 text-blue-500"/> },
  { id: 'FDV-1111', name: 'Family Dynamiverse', description: 'Simulate and analyze interpersonal and family dynamics.', icon: <UsersIcon className="h-8 w-8 text-rose-400"/> },
  { id: 'FV-9876', name: 'Financioverse', description: 'A global economic simulator for market and investment strategies.', icon: <BanknotesIcon className="h-8 w-8 text-emerald-400"/> },
  { id: 'GV-1234', name: 'GoogleVerse', description: 'Harness and visualize the entirety of public web data.', icon: <CloudIcon className="h-8 w-8 text-red-500"/> },
  { id: 'SMV-7654', name: 'Social mediaVerse', description: 'Advanced cultural and communication simulator.', icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-indigo-400"/> },
  { id: 'AV-8765', name: 'Automativerse', description: 'Design and deploy complex automation and AI agent workflows.', icon: <CommandLineIcon className="h-8 w-8 text-slate-400"/> },
  { id: 'MV-6543', name: 'Manufacturoverse', description: 'Simulate digital factories and production lines from end-to-end.', icon: <BuildingStorefrontIcon className="h-8 w-8 text-stone-500"/> },
  { id: 'GV-3421', name: 'Geometroverse', description: 'Explore and create in the realm of pure geometric forms.', icon: <ChartBarIcon className="h-8 w-8 text-fuchsia-400"/> },
  { id: 'BV-9876', name: 'Biblioverse', description: 'A semantic library connecting all recorded knowledge.', icon: <AcademicCapIcon className="h-8 w-8 text-sky-500"/> },
  { id: 'PV-7654', name: 'Programoverse', description: 'High-level architecture design for large-scale software projects.', icon: <CodeBracketIcon className="h-8 w-8 text-lime-400"/> },
  { id: 'CV-8765', name: 'Communoverse', description: 'Linguistic and cultural simulator for real-time translation and diplomacy.', icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-teal-300"/> },
  { id: 'KV-4321', name: 'KarstaVerse', description: 'Geological and environmental simulation for planetary terraforming.', icon: <GlobeAltIcon className="h-8 w-8 text-green-600"/> },
  { id: 'AV-1111', name: 'Agroverse', description: 'Planetary-scale agricultural simulator for optimizing food supply.', icon: <SunIcon className="h-8 w-8 text-yellow-400"/> },
];
