import { useState } from "react";
import styles from "./comboBox.module.css";

export default function Combobox({
  id,
  value,
  onValueChange,
  options,
  onSelect,
  placeholder,
  disabled = false,
  noResultsText = "Sin resultados",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleKeyDown = (e) => {
    if (!isOpen && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      setIsOpen(true);
      return;
    }

    if (!options.length) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % options.length);
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + options.length) % options.length);
    }

    if (e.key === "Enter") {
      e.preventDefault();
      const option = options[activeIndex];
      if (option) {
        onSelect(option);
        setIsOpen(false);
      }
    }

    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div className={styles.comboboxWrapper}>
      <input
        id={id}
        className={styles.select}
        type="text"
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        role="combobox"
        aria-expanded={isOpen}
        aria-controls={`${id}-listbox`}
        aria-autocomplete="list"
        onFocus={() => {
          setIsOpen(true);
          setActiveIndex(0);
        }}
        onBlur={() => {
          setTimeout(() => setIsOpen(false), 120);
        }}
        onChange={(e) => {
          onValueChange(e.target.value);
          setIsOpen(true);
          setActiveIndex(0);
        }}
        onKeyDown={handleKeyDown}
      />

      {isOpen && !disabled && (
        <ul id={`${id}-listbox`} className={styles.comboboxList} role="listbox">
          {options.length ? (
            options.map((option, index) => (
              <li key={option.id} role="option" aria-selected={index === activeIndex}>
                <button
                  type="button"
                  className={`${styles.comboboxOption} ${index === activeIndex ? styles.comboboxOptionActive : ""}`}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    onSelect(option);
                    setIsOpen(false);
                  }}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  {option.label}
                </button>
              </li>
            ))
          ) : (
            <li className={styles.comboboxEmpty}>{noResultsText}</li>
          )}
        </ul>
      )}
    </div>
  );
}