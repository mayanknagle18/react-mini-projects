import React from "react";
import "./App.css";                      
import { BrowserRouter, Route, Routes } from "react-router";
import IndexPages from "./Components/IndexPages/IndexPages";
import AgeCalculator from "./Components/AgeCalculator/AgeCalculator"; 
import BmiCalculator from "./Components/BmiCalculator/BmiCalculator";
import BookManager from "./Components/BookManager/BookManager";
import CalculatorMain from "./Components/Calculator/CalculatorMain";
import CharacterCounter from "./Components/CharacterCounter/CharacterCounter";
import CharacterFrequencyCounter from "./Components/CharacterFrequencyCounter/CharacterFrequencyCounter";
import CoinToss from "./Components/CoinToss/CoinToss";
import ColorChangerMain from "./Components/ColorChanger/ColorChangerMain";
import ColorPaletteGenerator from "./Components/ColorPaletteGenerator/ColorPaletteGenerator";
import ContactManager from "./Components/ContactManager/ContactManager";
import CopyToClipboard from "./Components/CopyToClipboard/CopyToClipboard";
import CounterMain from "./Components/Counters/CounterMain";
import CouponCodeGenerator from "./Components/CouponCodeGenerator/CouponCodeGenerator";
import DiceRoller from "./Components/DiceRoller/DiceRoller";
import DigitalClock from "./Components/DigitalClock/DigitalClock";
import DropodownMenu from "./Components/DropdownMenu/DropodownMenu";
import EmojiPicker from "./Components/EmojiPicker/EmojiPicker";
import EvenOddChecker from "./Components/EvenOddChecker/EvenOddChecker";
import ExpenseTracker from "./Components/ExpenseTracker/ExpenseTracker";
import FAQAccordion from "./Components/FAQAccordion/FAQAccordion";
import FormValidation from "./Components/FormValidation/FormValidation";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import KeyboardEventTracker from "./Components/KeyboardEventTracker/KeyboardEventTracker";
import LikeAndDislikeCounter from "./Components/LikeAndDislikeCounter/LikeAndDislikeCounter";
import ModalPopup from "./Components/ModalPopup/ModalPopup";
import MousePositionTrackers from "./Components/MousePositionTrackers/MousePositionTrackers";
import MovieSearch from "./Components/MovieSearch/MovieSearch";
import NotificationToast from "./Components/NotificationToast/NotificationToast";
import NumberGuessingGame from "./Components/NumberGuessingGame/NumberGuessingGame";
import OnlineOfflineDetector from "./Components/OnlineOfflineDetector/OnlineOfflineDetector";
import PalindromeChecker from "./Components/PalindromeChecker/PalindromeChecker";
import PasswordGenerator from "./Components/PasswordGenerator/PasswordGenerator";
import PasswordStrengthChecker from "./Components/PasswordStrengthChecker/PasswordStrengthChecker";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import RandomQuoteGenerator from "./Components/RandomQuoteGenerator/RandomQuoteGenerator";
import RandomUserCard from "./Components/RandomUserCard/RandomUserCard";
import ReactionTimer from "./Components/ReactionTimer/ReactionTimer";
import SearchFilter from "./Components/SearchFilter/SearchFilter";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import StarRating from "./Components/StarRating/StarRating";
import Stopwatch from "./Components/Stopwatch/Stopwatch";
import StudentManager from "./Components/StudentManager/StudentManager";
import TabsComponent from "./Components/TabsComponent/TabsComponent";
import TemperatureConverter from "./Components/TemperatureConverter/TemperatureConverter";
import TextCaseConverter from "./Components/TextCaseConverter/TextCaseConverter";
import TipCalculator from "./Components/TipCalculator/TipCalculator";
import ToDoAppMain from "./Components/ToDoApp/ToDoAppMain";
import ToggleTheme from "./Components/ToggleTheme/ToggleTheme";
import TrafficLight from "./Components/TrafficLight/TrafficLight";
import UserCrud from "./Components/UserCrud/UserCrud";
import UserSearch from "./Components/UserSearch/UserSearch";
import VowelCounter from "./Components/VowelCounter/VowelCounter";
import WeatherApp from "./Components/WeatherApp/WeatherApp";
import WordCounter from "./Components/WordCounter/WordCounter";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPages />} />
        <Route path="/age-calculator" element={<AgeCalculator />} /> 
        <Route path="/bmi-calculator" element={<BmiCalculator />} />
        <Route path="/book-manager" element={<BookManager />} />
        <Route path="/calculator" element={<CalculatorMain />} />
        <Route path="/character-counter" element={<CharacterCounter />} />
        <Route path="/character-frequency-counter" element={<CharacterFrequencyCounter />} />
        <Route path="/coin-toss" element={<CoinToss />} />
        <Route path="/color-changer" element={<ColorChangerMain />} />
        <Route path="/color-palette-generator" element={<ColorPaletteGenerator />} />
        <Route path="/contact-manager" element={<ContactManager />} />
        <Route path="/copy-to-clipboard" element={<CopyToClipboard />} />
        <Route path="/counters" element={<CounterMain />} />
        <Route path="/coupon-code-generator" element={<CouponCodeGenerator />} />
        <Route path="/dice-roller" element={<DiceRoller />} />
        <Route path="/digital-clock" element={<DigitalClock />} />
        <Route path="/dropdown-menu" element={<DropodownMenu />} />
        <Route path="/emoji-picker" element={<EmojiPicker />} />
        <Route path="/even-odd-checker" element={<EvenOddChecker />} />
        <Route path="/expense-tracker" element={<ExpenseTracker />} />
        <Route path="/faq-accordion" element={<FAQAccordion />} />
        <Route path="/form-validation" element={<FormValidation />} />
        <Route path="/image-gallery" element={<ImageGallery />} />
        <Route path="/keyboard-event-tracker" element={<KeyboardEventTracker />} />
        <Route path="/like-dislike-counter" element={<LikeAndDislikeCounter />} />
        <Route path="/modal-popup" element={<ModalPopup />} />
        <Route path="/mouse-position-tracker" element={<MousePositionTrackers />} />
        <Route path="/movie-search" element={<MovieSearch />} />
        <Route path="/notification-toast" element={<NotificationToast />} />
        <Route path="/number-guessing" element={<NumberGuessingGame />} />
        <Route path="/online-offline-detector" element={<OnlineOfflineDetector />} />
        <Route path="/palindrome-checker" element={<PalindromeChecker />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
        <Route path="/password-strength-checker" element={<PasswordStrengthChecker />} />
        <Route path="/progress-bar" element={<ProgressBar />} />
        <Route path="/random-quote-generator" element={<RandomQuoteGenerator />} />
        <Route path="/random-user-card" element={<RandomUserCard />} />
        <Route path="/reaction-timer" element={<ReactionTimer />} />
        <Route path="/search-filter" element={<SearchFilter />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/star-rating" element={<StarRating />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/student-manager" element={<StudentManager />} />
        <Route path="/tabs-component" element={<TabsComponent />} />
        <Route path="/temperature-converter" element={<TemperatureConverter />} />
        <Route path="/text-case-converter" element={<TextCaseConverter />} />
        <Route path="/tip-calculator" element={<TipCalculator />} />
        <Route path="/to-do-app" element={<ToDoAppMain />} />
        <Route path="/toggle-theme" element={<ToggleTheme />} />
        <Route path="/traffic-light" element={<TrafficLight />} />
        <Route path="/user-crud" element={<UserCrud />} />
        <Route path="/user-search" element={<UserSearch />} />
        <Route path="/vowel-counter" element={<VowelCounter />} />
        <Route path="/weather-app" element={<WeatherApp />} />
        <Route path="/word-counter" element={<WordCounter />} />
      </Routes> 
    </BrowserRouter>
  );
};

export default App;